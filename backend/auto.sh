#!/bin/bash

# Watch script that updates common package version in multiple target package.json files
# Usage: ./version-sync.sh [command_to_run] [target_package1] [target_package2] ...

COMMON_PKG="./packages/common/package.json"
VERSION_FILE=".common-package-version"
CHECK_INTERVAL=2  # Check every 2 seconds

# Check if common package exists
if [ ! -f "$COMMON_PKG" ]; then
    echo "Error: package.json not found at $COMMON_PKG"
    exit 1
fi

# Get command to run (first argument)
COMMAND_TO_RUN=""
TARGET_PACKAGES=()

if [ $# -gt 0 ]; then
    COMMAND_TO_RUN="$1"
    shift
    TARGET_PACKAGES=("$@")
fi

# Initialize the version file
if [ ! -f "$VERSION_FILE" ]; then
    grep -E '"version":' "$COMMON_PKG" | awk -F'"' '{print $4}' > "$VERSION_FILE"
fi

echo "Watching for version changes in $COMMON_PKG..."
if [ ${#TARGET_PACKAGES[@]} -gt 0 ]; then
    echo "Will update common package version in these files:"
    printf " - %s\n" "${TARGET_PACKAGES[@]}"
else
    echo "No target packages specified for version updates"
fi
echo "Press Ctrl+C to stop"

while true; do
    CURRENT_VERSION=$(grep -E '"version":' "$COMMON_PKG" | awk -F'"' '{print $4}')
    PREVIOUS_VERSION=$(cat "$VERSION_FILE")
    
    if [ "$CURRENT_VERSION" != "$PREVIOUS_VERSION" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Version change detected: $PREVIOUS_VERSION -> $CURRENT_VERSION"
        echo "$CURRENT_VERSION" > "$VERSION_FILE"
        
        # Run the specified command if provided
        if [ -n "$COMMAND_TO_RUN" ]; then
            echo "Executing: $COMMAND_TO_RUN"
            eval "$COMMAND_TO_RUN"
        fi
        
        # Update common package version in all target packages after 5 seconds
        if [ ${#TARGET_PACKAGES[@]} -gt 0 ]; then
            echo "Waiting 5 seconds before updating target packages..."
            sleep 5
            
            for TARGET_PKG in "${TARGET_PACKAGES[@]}"; do
                if [ ! -f "$TARGET_PKG" ]; then
                    echo "Warning: Target package not found - $TARGET_PKG"
                    continue
                fi
                
                # Check if jq is available (preferred method)
                if command -v jq &> /dev/null; then
                    echo "Updating common package version in $TARGET_PKG to $CURRENT_VERSION (using jq)"
                    jq --arg v "$CURRENT_VERSION" '
                        if .dependencies."@heno7/common" then 
                            .dependencies."@heno7/common" = $v 
                        elif .devDependencies."@heno7/common" then 
                            .devDependencies."@heno7/common" = $v 
                        elif .peerDependencies."@heno7/common" then
                            .peerDependencies."@heno7/common" = $v
                        else . end' "$TARGET_PKG" > "$TARGET_PKG.tmp" && \
                    mv "$TARGET_PKG.tmp" "$TARGET_PKG"
                else
                    # Fallback to sed if jq not available
                    echo "Updating common package version in $TARGET_PKG to $CURRENT_VERSION (using sed)"
                    sed -i.bak -E "s/(\"@heno7\/common\": \")[^\"]+/\1$CURRENT_VERSION/" "$TARGET_PKG" && \
                    rm -f "$TARGET_PKG.bak"
                fi
                
                # Verify the update
                UPDATED_VERSION=$(grep -E '"@heno7/common": "' "$TARGET_PKG" | awk -F'"' '{print $4}')
                if [ "$UPDATED_VERSION" == "$CURRENT_VERSION" ]; then
                    echo "Successfully updated common package version in $TARGET_PKG"
                else
                    echo "Warning: Failed to update common package version in $TARGET_PKG"
                fi
            done
        fi
    fi
    
    sleep $CHECK_INTERVAL
done
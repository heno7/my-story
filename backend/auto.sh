#!/bin/bash

# Watch script that updates common package version in auth's dependencies
# Usage: ./version-sync.sh [command_to_run]

COMMON_PKG="./packages/common/package.json"
AUTH_PKG="./packages/auth/package.json"
VERSION_FILE=".common-package-version"
CHECK_INTERVAL=2  # Check every 2 seconds

# Check if package files exist
if [ ! -f "$COMMON_PKG" ]; then
    echo "Error: package.json not found at $COMMON_PKG"
    exit 1
fi

if [ ! -f "$AUTH_PKG" ]; then
    echo "Error: package.json not found at $AUTH_PKG"
    exit 1
fi

# Initialize the version file
if [ ! -f "$VERSION_FILE" ]; then
    grep -E '"version":' "$COMMON_PKG" | awk -F'"' '{print $4}' > "$VERSION_FILE"
fi

echo "Watching for version changes in $COMMON_PKG..."
echo "Will update common package version in $AUTH_PKG dependencies"
echo "Press Ctrl+C to stop"

while true; do
    CURRENT_VERSION=$(grep -E '"version":' "$COMMON_PKG" | awk -F'"' '{print $4}')
    PREVIOUS_VERSION=$(cat "$VERSION_FILE")
    
    if [ "$CURRENT_VERSION" != "$PREVIOUS_VERSION" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Version change detected: $PREVIOUS_VERSION -> $CURRENT_VERSION"
        echo "$CURRENT_VERSION" > "$VERSION_FILE"
        
        # Run the specified command if provided
        if [ $# -gt 0 ]; then
            echo "Executing: $@"
            eval "$@"
        fi
        
        # Update common package version in auth's dependencies after 5 seconds
        echo "Waiting 5 seconds before updating auth's dependencies..."
        sleep 5
        
        # Check if jq is available (preferred method)
        if command -v jq &> /dev/null; then
            echo "Updating common package version in $AUTH_PKG to $CURRENT_VERSION (using jq)"
            jq --arg v "$CURRENT_VERSION" '
                if .dependencies."@heno7/common" then 
                    .dependencies."@heno7/common" = $v 
                elif .devDependencies."@heno7/common" then 
                    .devDependencies."@heno7/common" = $v 
                else . end' "$AUTH_PKG" > "$AUTH_PKG.tmp" && \
            mv "$AUTH_PKG.tmp" "$AUTH_PKG"
        else
            # Fallback to sed if jq not available
            echo "Updating common package version in $AUTH_PKG to $CURRENT_VERSION (using sed)"
            sed -i.bak -E "s/(\"@heno7\/common\": \")[^\"]+/\1$CURRENT_VERSION/" "$AUTH_PKG" && \
            rm -f "$AUTH_PKG.bak"
        fi
        
        # Verify the update
        UPDATED_VERSION=$(grep -E '"@heno7/common": "' "$AUTH_PKG" | awk -F'"' '{print $4}')
        if [ "$UPDATED_VERSION" == "$CURRENT_VERSION" ]; then
            echo "Successfully updated common package version in $AUTH_PKG to $CURRENT_VERSION"
        else
            echo "Warning: Failed to update common package version in $AUTH_PKG"
        fi
    fi
    
    sleep $CHECK_INTERVAL
done
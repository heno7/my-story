# auto.sh to update @heno7/common in dependency field of multi packages when version of @heno7/common version change

./auto.sh "npm run build:publish -w @heno7/common" ./packages/auth/package.json ./packages/story/package.json

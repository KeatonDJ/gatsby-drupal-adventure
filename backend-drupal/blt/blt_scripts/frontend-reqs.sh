#!/bin/sh
echo "Here goes nothing ¯\_(ツ)_/¯"
RED='\033[0;31m' # Red
GREEN='\033[0;32m'
NC='\033[0m' # No Color

if [ -z "$1" ]; then echo "Please provide an npm package path."; exit 1; fi

if command -v npm
then
    echo "Running build npm"
    echo "Version: ${GREEN}" $(node -v)
    echo $(npm i --prefix $1)
else
    echo "${RED}NPM NOT FOUND. Front end will not function properly without node and NPM being installed!"
fi
#!/bin/bash

npm ci
npm run build
git checkout package-lock.json
export PATH=~/.local/bin:$PATH
pm2 reload ecosystem.config.js --env prelive  --update-env
pm2 save
#!/bin/bash

npm ci
npm run build
git checkout package-lock.json
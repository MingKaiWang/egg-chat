#!/bin/bash

set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd $ROOT/web/egg-chat
npm install && npm run build
cd ../../ && docker-compose up --build

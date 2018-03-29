#!/bin/bash

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd $ROOT/web/egg-chat
npm run build
cd ../../ && docker-compose up --build
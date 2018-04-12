'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522235643873_2355';

  // add your config here
  config.middleware = ['errorHandler'];

  //error handle 
  config.errorHandler = {
    match: '/api',
  }

  exports.security = {
    csrf: {
      ignore: '/api',
    }
  }

  config.jwt = {
    secret: "burnedfrogjwtsecret",
    ignore: /^(api)+(\/register|\/login)+$/
  }

  //mongoose config
  config.mongoose = {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/eggchat",
    options: {},
  }

  //redis
  config.redis = {
    client: {
      port: 6379,
      host: process.env.REDIS_URL || "127.0.0.1",
      password: 'auth',
      db: 0,
    }
  }

  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      }
    }
  }

  return config;
};

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

  //mongoose config
  config.mongoose = {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/eggchat",
    options: {},
  }

  return config;
};

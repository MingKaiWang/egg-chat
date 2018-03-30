'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522235643873_2355';

  // add your config here
  config.middleware = [];

  //mongoose config
  config.mongoose = {
    url: process.env.MONGO_URL || "mongdb://mongodb:27017/eggchat",
    options: {},
  }

  return config;
};

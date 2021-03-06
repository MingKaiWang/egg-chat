'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
    enabled: true,
    package: 'egg-mongoose',
}

exports.validate = {
    enabled: true,
    package: 'egg-validate',
}

exports.jwt = {
    enabled: true,
    package: 'egg-jwt',
}

exports.redis = {
    enabled: true,
    package: 'egg-redis',
}

exports.io = {
    enabled: true,
    package: 'egg-socket.io',
}
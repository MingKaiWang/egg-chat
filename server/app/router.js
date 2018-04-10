'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.index);
  router.post('/api/register', controller.user.register)
  router.post('/api/login', controller.user.login)
  router.get('/api/tokenLogin', controller.user.tokenLogin)
  router.get('/api/logout', controller.user.logout)
  router.get('/api/validateToken', controller.user.validateToken)
};

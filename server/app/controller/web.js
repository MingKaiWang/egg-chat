'use strict';

const Controller = require('egg').Controller;

class WebController extends Controller {
  async index() {
    this.ctx.body = "";
  }
}

module.exports = WebController;

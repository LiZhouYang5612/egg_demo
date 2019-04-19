'use strict';


const Controller = require('egg').Controller;
const R = require('ramda');

class UserController extends Controller {
  async getUsers(ctx) {
    const body = ctx.request.body;

    try {

      ctx.validate({
        userIds: { type: 'array', require: true },
      }, body);
    } catch (error) {
      console.log('==============coming error');
      ctx.body = {
        errors: error,
      };
      return;
    }

    const { userIds } = body;
    console.log('----------userIds: ', userIds);
    const user = await ctx.model.User.findAll();
    ctx.body = user;
  }

  async echo(ctx) {
    ctx.body = {
      code: 200,
      msg: '连接成功',
    };
  }
}

module.exports = UserController;

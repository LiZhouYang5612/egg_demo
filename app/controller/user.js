'use strict'


const Controller = require('egg').Controller;

class UserController extends Controller{
    async getUsers(){
        const _ctx = this.ctx;

        const body = _ctx.request.body;

        try{

            _ctx.validate({
                userIds: { type: 'array', require: true},
            }, body);
        }catch(error){
            console.log("==============coming error");
            _ctx.body = {
                errors:error
            }
            return ;
        }

        const { userIds } = body;
        console.log("----------userIds: ", userIds);
        const user = await _ctx.model.User.findAll();
        _ctx.body = user;
    }
    async echo(){
        ctx.body = {
            code: 200,
            msg: '连接成功'
        }
    }
}

module.exports = UserController;
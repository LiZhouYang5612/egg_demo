'use strict';


module.exports = app => {
    const { router, controller } = app;

    router.post('/getUsers', controller.user.getUsers);
}
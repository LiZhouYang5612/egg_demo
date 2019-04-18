module.exports = app => {
    const config = exports = {};

    config.keys = "egg_key";

    config.sequelize = {
        dialect: 'mysql',
        host: '192.168.9.138',
        port: 3306,
        database: 'test1',
        username: 'root',
        password: '123456'
    } 

    config.validate = {
        convert: false,
    };

    config.security = {
        csrf: {
          enable: false,
        },
    };

    return config;

}
'use strict';


module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('user',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: STRING(8),
      },
      password: {
        type: STRING(16),
      },
    }
  );

  User.sync();
  return User;
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isNumberic: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    }
  });
  return User;
};

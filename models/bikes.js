module.exports = function(sequelize, DataTypes) {
  var Bike = sequelize.define("Bike", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    bikeType: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isIn: [["Mountain Bike", "Road Bike"]]
      // }
    },
    lastWork: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adult: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Bike;
};

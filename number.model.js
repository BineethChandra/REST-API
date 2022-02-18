//number Schema
module.exports = (sequelize, DataTypes) => {
  let numbers = sequelize.define("number", {
    numbers: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  })
 return number
}
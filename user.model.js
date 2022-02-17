const { numbers } = require(".");

//USER Schema
module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,},
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
              },
        email: {
            type: DataTypes.STRING,
            allowNull: false
               },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
             },
    })
   
    return User
  }
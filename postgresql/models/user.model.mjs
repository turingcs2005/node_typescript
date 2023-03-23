import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../db/connection.mjs";

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }  
}, {
    sequelize,
    modelName: 'User'
});

export { User };
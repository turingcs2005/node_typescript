import { DataTypes, Model, Op } from "sequelize";
import { sequelize } from "../db/connection.mjs";

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: 'Primary key'
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,  // constraints are at database level and are triggered after async calls
    unique: false,
    validate: {        // validators are at JavaScript level and are triggered after function calls such as create(), update(), save()
      [Op.or]: {       // first name needs to be between 1 - 10 characters, unless first name contains string 'Windsor'
        len: [1, 10],
        contains: 'Windsor'
      }
    }
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  // a virtual field: does not exist in database but can be accessed
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}, {
    sequelize,
    modelName: 'User'
});

await User.sync(
  {  force: true } // do not use this in production!
); // delete any existing table and create empty table

export { User };
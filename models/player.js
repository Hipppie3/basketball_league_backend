import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Player = sequelize.define('Player', {
 firstName: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 lastName: {
  type: DataTypes.STRING,
 },
 age: {
  type: DataTypes.INTEGER,
 },
 position: {
  type: DataTypes.STRING,
 },
 number: {
  type: DataTypes.STRING,
 },
});

export default Player;
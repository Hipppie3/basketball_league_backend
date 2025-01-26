import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database.js';

const Player = sequelize.define('player', {
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
  type: DataTypes.INTEGER,
 },
});

export default Player;
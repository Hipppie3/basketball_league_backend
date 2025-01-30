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
 teamId: {
  type: DataTypes.INTEGER,
  allowNull: true,
  references: {
   model: 'teams', // The table this foreign key references
   key: 'id', // The column in 'teams' that 'teamId; refers
    },
  onDelete: 'SET NULL', // If a team is deleted, set teamId to NULL
 },

});

export default Player;
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Stat = sequelize.define('stat', {
  points: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  two_points_made: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  two_points_attempted: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  three_points_made: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  three_points_attempted: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  free_throws_made: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  free_throws_attempted: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  offensive_rebounds: { 
   type: DataTypes.INTEGER, 
   allowNull: false,
   defaultValue: 0 },
  defensive_rebounds: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  assists: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  steals: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  blocks: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  turnovers: { 
   type: DataTypes.INTEGER, 
   allowNull: false, 
   defaultValue: 0 },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'players',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
});

export default Stat;

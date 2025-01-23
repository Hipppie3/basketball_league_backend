import { Sequelize } from "sequelize";
import config from './config.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env] //dynamically accessing the object property corresponding to the current environment


const sequelize = new Sequelize(
 dbConfig.database,
 dbConfig.username,
 dbConfig.password,
 {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  logging: false,
 }
);

// Now you can use the authenticate method on the sequelize instance
const connectDB = async () => {
  try {
    await sequelize.authenticate();  // Testing connection with the instance
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
export { sequelize, connectDB };
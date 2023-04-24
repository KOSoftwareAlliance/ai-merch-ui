import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '$env/static/private';
import { Sequelize } from 'sequelize';
import { defineProduct } from './models/products';

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// we instantiate our models
const Product = defineProduct(sequelize);


// relations between models

export { sequelize as db, Product }
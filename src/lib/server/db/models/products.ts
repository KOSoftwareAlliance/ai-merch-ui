import type { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';

const defineProduct = function(sequelize: Sequelize) {
  return sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING(100) },
    description: { type: DataTypes.STRING(250) },
    price: { type: DataTypes.DECIMAL(10, 2) },
    category_id: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    tableName: 'products',
    timestamps: false,
  })
}

export { defineProduct }
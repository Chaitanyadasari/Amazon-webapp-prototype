const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');
const Comments = require('./Comments')

const Product = sequelize.define('product', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sellerName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rating: {
    type: Sequelize.DOUBLE,
  },
  description: {
    type: Sequelize.STRING,
  },
});

Product.hasMany(Comments);


module.exports = Product;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Location model
class Product extends Model {}

// create fields/columns for Location model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: { type: DataTypes.DECIMAL, allowNull: false },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      Validate: { isNumber: true },
      defaultValue: 10,
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Category", key: "id" },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Product",
  }
);

module.exports = Product;

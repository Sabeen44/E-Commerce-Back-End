const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Traveller model
class ProductTag extends Model {}

// create fields/columns for Traveller model

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ProductTag",
  }
);

module.exports = ProductTag;

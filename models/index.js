const Category = require("./category");
const Product = require("./product");
const Tag = require("./tag");
const ProductTag = require("./productTag");

Product.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });

Category.hasMany(Product, { foreignKey: "category_id", onDelete: "CASCADE" });

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,

    unique: false,
  },
  as: "product_tag",
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },

  as: "product_tag",
});

module.exports = { Category, Product, Tag, ProductTag };

const router = require("express").Router();
const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const tagRoutes = require("./tagRoutes");

router.use("/product", productRoutes);
router.use("/tag", tagRoutes);
router.use("/category", categoryRoutes);

module.exports = router;

const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = await Category.findOne({
      where: { id: req.params.id },
      //include: [{ model: Product }],
    });
    res.status(200).json(categoryId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    { category_name: req.body.category_name },

    {
      where: { id: req.params.id },
    }
  )
    .then((updateCategory) => {
      res.json(updateCategory);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

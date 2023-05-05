const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  {
    // find all products
    // be sure to include its associated Category and Tag data
    try {
      const tagData = await Tag.findAll({});
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// find all tags
// be sure to include its associated Product data?

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = await Tag.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(tagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    { tag_name: req.body.tag_name },

    {
      where: { id: req.params.id },
    }
  )
    .then((updateTag) => {
      res.json(updateTag);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

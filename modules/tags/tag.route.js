const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from tag router" });
});

router.post("/", (req, res) => {
  res.json({ msg: "hello from tag post router" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "hello from tag put router" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from tag patch router" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from tag delete router" });
});
module.exports = router;

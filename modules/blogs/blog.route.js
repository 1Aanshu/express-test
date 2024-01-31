const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});

router.post("/", (req, res) => {
  res.json({ msg: "hello from blog post router" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "hello from blog put router" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from blog patch router" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from blog delete router" });
});
module.exports = router;

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from role router" });
});

router.post("/", (req, res) => {
  res.json({ msg: "hello from role post router" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "hello from role put router" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from role patch router" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from role delete router" });
});
module.exports = router;

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from user router" });
});

router.post("/", (req, res) => {
  res.json({ msg: "hello from user post router" });
});

router.put("/:id", (req, res) => {
  res.json({ msg: "hello from user put router" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from user patch router" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from user delete router" });
});
module.exports = router;

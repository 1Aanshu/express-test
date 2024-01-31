const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from user router" });
});
module.exports = router;

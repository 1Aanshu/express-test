const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from role router" });
});
module.exports = router;

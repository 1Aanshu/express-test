const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});

// const userRole = ["user"]; // req.headers
// const sysRole = ["admin"]; // passed in mw(checkRole)
// const checkRole = (userRole, sysRole) =>
// userRole.some((role)=>sysRole.includes(role));

const checkRole = (req, res, next) => {
  next();
};

router.post("/", checkRole, (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing");
    res.json({ msg: "hello from blog post router" });
  } catch (err) {
    next(err);
  }
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

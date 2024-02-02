const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});

// const userRole = ["user"]; // req.headers
// const sysRole = ["admin"]; // passed in mw(checkRole)
// const checkRole = (userRole, sysRole) =>
// userRole.some((role)=>sysRole.includes(role));

const checkRole = (sysRole) => {
  return (req, res, next) => {
    const userRole = req.headers.role.split(",");
    const result = sysRole.some((role) => userRole.includes(role));
    if (!result) throw new Error("Permission Denied");
    next();
  };
};

router.post("/", checkRole(["admin"]), (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing");
    res.json({ msg: "hello from blog post router" });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing");
    res.json({ msg: "hello from blog put router" });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const { status } = req.body;
    if (!status) throw new Error("Status is missing");
    res.json({ msg: "hello from blog patch router" });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from blog delete router" });
});
module.exports = router;

const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route");
const roleRouter = require("../modules/roles/role.route");
const tagRouter = require("../modules/tags/tag.route");
const userRouter = require("../modules/users/user.route");

router.get("/", (req, res) => {
  res.json({ msg: "hello from router index" });
});

router.use("/blogs", blogRouter);
router.use("/roles", roleRouter);
router.use("/tags", tagRouter);
router.use("/users", userRouter);

module.exports = router;

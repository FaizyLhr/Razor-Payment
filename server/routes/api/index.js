let router = require("express").Router();

router.use("/users", require("./users"));
router.use("/public", require("./public"));
router.use("/upload", require("./upload"));

module.exports = router;

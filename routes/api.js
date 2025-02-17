const express = require("express");
const router = express.Router();
const pollRoute = require("./poll.route");

router.use("/", pollRoute);

module.exports = router;
const express = require("express");
const router = express.Router();
const pollRoute = require("./poll.route");

router.route("/", pollRoute);

module.exports = router;
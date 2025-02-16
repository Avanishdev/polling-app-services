const express = require("express");
const router = express.Router();
const pollController = require("../controllers/poll.controller");

router.route("/polls").post(pollController.createPoll);
router.route("/polls").get(pollController.getAllPolls);
router.route("/polls/:id").get(pollController.getPoll);
router.route("/polls/:id/vote").post(pollController.votePoll);
router.route("/polls/:id/results").get(pollController.getResults);

module.exports = router;
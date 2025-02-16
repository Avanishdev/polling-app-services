const Poll = require("../models/poll.model");
const { getSocketIo } = require("../config/socket");

const createPoll = async (req, res) => {
    try {
        const { question, options } = req.body;
        const poll = new Poll({ question, options });
        await poll.save();
        return res.status(201).json(poll);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getPoll = async (req, res) => {
    try {
        const poll = await Poll.findById(req.params.id);
        if (!poll) return res.status(404).json({ error: "Poll not found" });
        return res.json(poll);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllPolls = async (req, res) => {
    try {
        const polls = await Poll.findOne({});
        if (!polls) return res.status(404).json({ error: "Polls not found" });
        return res.json(polls);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const votePoll = async (req, res) => {
    try {
        const { optionIndex } = req.body;
        const poll = await Poll.findById(req.params.id);
        if (!poll) return res.status(404).json({ error: "Poll not found" });

        poll.options[optionIndex].votes++;
        await poll.save();

        const io = getSocketIo();
        io.emit("pollUpdated", poll);

        return res.json(poll);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getResults = async (req, res) => {
    try {
        const poll = await Poll.findById(req.params.id);
        if (!poll) return res.status(404).json({ error: "Poll not found" });
        return res.json(poll);
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createPoll,
    getPoll,
    getAllPolls,
    votePoll,
    getResults,
};
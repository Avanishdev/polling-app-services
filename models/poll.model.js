const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: [
        {
            type: String,
            votes: { type: Number, default: 0 },
        }
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Poll", PollSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    age: {
        type: Number,
        required: true,
        validate: (value) => value > 20,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

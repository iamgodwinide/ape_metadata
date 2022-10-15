const { model, Schema } = require("mongoose");

const JsonFile = new Schema({
    name: {
        type: String,
        required: true
    },
})

module.exports = model("JsonFile", JsonFile);
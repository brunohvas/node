const mongoose = require("mongoose")

const { Schema } = mongoose

const taskSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Task =  mongoose.model("Task", taskSchema)

module.exports = Task
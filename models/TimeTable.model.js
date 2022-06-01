const mongoose = require("mongoose");

const timeTableSchema = new mongoose.Schema({
    teacher: { type: String, unique: true, required: true },
    subject: { type: String, unique: true, required: true },
    studentGroup: { type: String, unique: true, required: true },
    start: { type: String, unique: true, required: true },
    end: { type: String, unique: true, required: true },
}, {
    versionKey: false,
    timestamps: true
})

const Schedule = mongoose.model("Schedule", timeTableSchema);

module.exports = Schedule;
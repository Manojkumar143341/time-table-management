const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({
    className: { type: String, enum: ["IT", "CSE", "EEE", "ECE", "AIDS", "Mechanical"], required: true },
    schedule: [
        {
            day: String,
            hours: [
                {
                    hour: String,
                    subject: String,
                    tutor: String,
                },
            ],
        },
    ],
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Timetable", TimetableSchema);

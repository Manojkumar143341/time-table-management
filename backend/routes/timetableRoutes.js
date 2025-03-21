const express = require("express");
const Timetable = require("../models/Timetable");

const router = express.Router();

// Get Timetables
router.get("/", async (req, res) => {
    const timetables = await Timetable.find();
    res.json(timetables);
});

// Update Timetable
router.post("/update", async (req, res) => {
    const { className, schedule } = req.body;

    await Timetable.findOneAndUpdate(
        { className },
        { schedule, updatedAt: new Date() },
        { upsert: true }
    );
    res.json({ message: "Timetable updated successfully" });
});

module.exports = router;

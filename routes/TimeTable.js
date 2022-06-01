const express = require("express");
const router = express.Router();
const Schedule = require("../models/TimeTable.model");

router.get('/', async (req, res) => {
    try {
        const slots = await Schedule.find()
        res.json({ status: 200, slots });

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
})

router.post("/", async (req, res) => {
    try {
        const slot = await Schedule.create(req.body);
        res.json({ status: 200, slot });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
});

module.exports = router

const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/", async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        res.json(workouts)
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
	try {
		const workout = req.body;
		workout.date = Date.now();
		const result = await db.Workout.create(workout);
		res.json(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const exercise = req.body;
		const result = await db.Workout.findByIdAndUpdate(
			req.params.id,
			{$push: {exercises: exercise}},
			{new: true}
		);
		res.json(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;

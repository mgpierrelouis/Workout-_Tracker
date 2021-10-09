const router = require("express").Router();
const {Mongoose} = require('mongoose');
const db = require('../../models');


router.get('/', (req, res) => {
    db
    .Workout
    .aggregate(
                [
                    {
                        $addFields: { totalDuration: {$sum: "$exercises.duration"}}
                    }
                ])
    .sort({ day: -1})
    .limit(1)
    .then(dbWorkout => {
            res.status(200).json(dbWorkout);
    })
    .catch(err => {
            res.status(400).json(err);
    })
});

router.get('/range', (req, res) => {
    db.Workout
        .aggregate(
                    [
                        {
                            $addFields: { totalDuration: {$sum: "$exercises.duration"}}
                        }
                    ]
        )
        .sort({ day: -1 })
        .limit(7)
        .then (dbWorkout => {
                res.status(200).json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/:id', ({ body, params }, res) => {
    db.Workout
        .findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
        .then (dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

router.post('/', ({ body }, res) => {
    db.Workout
        .create(body)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

module.exports = router;
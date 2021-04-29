const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', (req,res) => {
    db.Workout.aggregate([{
        $addFields:{
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }])
    .then(dbWorkout => {
        return res.json(dbWorkout);
    }).catch(err => {
        return res.json(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body);
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body,
            },
        },
        {
            new: true,
            runValidators: true
        }
    ).then(dbWorkout => {
            return res.json(dbWorkout);
        }).catch(err => {
            return res.json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create({})
        .then(dbWorkout => {
            return res.json(dbWorkout);
        })
        .catch(err => {
            return res.json(err);
        });

    res.send('Got a POST request');
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(dbWorkout => {
            return res.json(dbWorkout);
        })
        .catch(err => {
            return res.json(err);
        });
});

module.exports = router; 
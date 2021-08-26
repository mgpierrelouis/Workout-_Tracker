const express = require('express');

const workoutsRoutes = require('./workouts');

const router = express.Router();

router.use('/workouts', workoutsRoutes);

module.exports = router;
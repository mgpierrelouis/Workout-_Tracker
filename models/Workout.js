const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	
	exercises: [
		{
			date: {
                type: Date,
                required: 'Date is required'
            },
            totalDuration: {
				type: Number,
				trim: true
			},
            numExcercises: {
				type: String,
				trim: true
			},
			weight: {
				type: Number,
				trim: true
			},
			sets: {
				type: Number,
				trim: true
			},
			reps: {
				type: Number,
				trim: true
			},
            distance: {
				type: Number,
				trim: true
			}
		}
	]
});

// Create Workout mongoose model and export 
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
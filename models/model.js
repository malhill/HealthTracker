const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: 
  [{
    type: {
        type: String,
        trim: true,
        required: "Exercise type is required",
    },
    name: {
        type: String,
        trim: true,
        required: "Name of excerise is required",
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    duration: {
      type: Number,
      required: "Number of minutes required"
    },
    cardio: {
      type: Number,
    }
  }]
},
);

WorkoutSchema.methods.totalDuration = () => {
  this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  console.log(totalDuration());
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

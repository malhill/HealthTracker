const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise: 
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
      required: "Weight incriments required"
    },
    sets: {
      type: Number,
      required: "Number of sets required"
    },
    reps: {
      type: number,
      required: "Number of reps required"
    },
    duration: {
      type: Number,
      required: "Number of minutes required"
    },
    cardio: {
      type: Number,
      required: "Number of miles completed"
    }
  }],

  // email: {
  //   type: String,
  //   unique: true,
  //   match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  // },

  // userCreated: {
    
  // }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type:{
        type: String,
        require: "must select an exercise"
    },

    name:{
        type: String,
        require: "what is the name of the exercise"
    },

    duration:{
        type: Number,
        minimum: 0
    },

    weight:{
        type: Number,
        minimum: 0
    },

    reps:{
        type: Number,
        minimum: 0
    },

    sets:{
        type: Number,
        minimum: 0
    },
    distance:{
        type: Number,
        minimum: 0
    },
    created:{
        type: Date,
        default: Date.now
    }

})

const Workout = mongoose.model("Workout", WorkoutSchema)
module.exports = Workout
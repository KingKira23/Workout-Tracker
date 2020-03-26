const db = require("../models/Workout")

module.exports = function(app) {
    app.post("/api/workouts", function(req, res) {
        console.log(req.body)
        // db.create(req.body).then(function(Workout) {
        //     res.json(Workout);
        // })
    })

    app.put("/api/workouts/:WorkOutId", function(req, res) {
        db.findOne({where: {id: req.params.id } }).then(function(response) {
            res.json(response.dataValues)
        })
    })
}
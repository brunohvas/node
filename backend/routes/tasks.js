const router = require("express").Router()

const taskController = require("../controllers/taskController")

router
    .route("/tasks")
    .post((req, res) => taskController.create(req, res))
    .get((req, res) => taskController.getAll(req, res))

router
    .route("/tasks/:id")
    .get((req, res) => taskController.getTask(req, res))
    .delete((req, res) => taskController.delete(req, res))
    .put((req, res) => taskController.update(req, res))


module.exports = router
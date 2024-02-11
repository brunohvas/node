const taskModel = require("../models/Task")

const taskController = {

    create: async (req, res) => {
        try {

            const task = {
                name: req.body.name,
                description: req.body.description,
                time: req.body.time,
                status: req.body.status
            }

            const response = await taskModel.create(task)

            res.status(201).json({ response, msg: "Task criada!" })

        } catch (error) {
            res.status(500).json({ error })
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const tasks = await taskModel.find()
            res.json(tasks)

        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getTask: async (req, res) => {
        try {
            const id = req.params.id
            const task = await taskModel.findById(id)

            if (!task) {
                res.status(404).json({ message: "Task não encontrada" })
                return
            }

            res.json(task)

        } catch (error) {
            res.status(500).json({ error })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const task = await taskModel.findById(id)

            if (!task) {
                res.status(404).json({ message: "Task não encontrada" })
                return
            }

            const deletedTask = await taskModel.findByIdAndDelete(id)

            res.status(200).json({ deletedTask, message: "Task excluida!" })

        } catch (error) {
            res.status(500).json({ erro })
        }
    },
    update: async (req, res) => {

        const id = req.params.id
        const task = {
            name: req.body.name,
            description: req.body.description,
            time: req.body.time,
            status: req.body.status
        }

        const updatedTask = await taskModel.findByIdAndUpdate(id, task)

        if (!updatedTask) {
            res.status(404).json({ updatedTask, message: "Task não encontrada!" })
            return
        }

        res.status(200).json({ task, message: "Task Atualizada!" })

    }
}

module.exports = taskController
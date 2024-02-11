const taskModel = require("../models/Task")

const taskController = {

    create: async(req, res) => {
        try {

            const task = {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                time: req.body.time,
                image: req.body.image
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
    getTask: async(req, res) => {
        try {
            const id = req.params.id
            const task = await taskModel.find({id: id})//busca por id inserido, porém preciso descobrir como impedir que o mesmo id seja inserido no banco, por nao se tratar de um banco relacional

            if(task == '') {
               res.status(404).json({ message: "Task não encontrada"})
               return 
            }

            res.json(task)

        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

module.exports = taskController
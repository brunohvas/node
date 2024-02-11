const mongoose = require("mongoose")

async function main() {

    try {
        await mongoose.connect(
            "mongodb+srv://bruno:bruno@clusterapi.jw9rsc7.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Banco Ok")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main
const express = require("express")
const app = express()
const PORT = 3001
const mongoose = require('mongoose')
const linkRoute = require("./routes/linkRoutes")

mongoose.connect("mongodb://localhost/links")


let db = mongoose.connection

db.on("error", () => { console.log("Houve um erro") })
db.once("open", () => { 
    console.log(`Banco Carregado`)

})

app.use("/", linkRoute)

app.listen(PORT, () => {
    console.log(`aplicação rodando na Porta ${PORT}`);
})
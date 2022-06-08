const express = require("express")
const app = express()
const PORT = 3001
const mongoose = require('mongoose')
const linkRoute = require("./routes/linkRoutes")
const path = require('path')

mongoose.connect("mongodb://localhost/links")


let db = mongoose.connection

db.on("error", () => { console.log("Houve um erro") })
db.once("open", () => { 
    console.log(`Banco Carregado`)

})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "templates"))

app.use("/", linkRoute)

app.listen(PORT, () => {
    console.log(`aplicação rodando na Porta ${PORT}`);
})
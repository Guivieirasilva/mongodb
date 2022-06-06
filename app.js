const { error } = require("console")
const express = require("express")
const app = express()
const PORT = 3001
const mongoose = require('mongoose')
const linkSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    click: {type:Number, default:0}
})

const Link = mongoose.model("Link", linkSchema)

let link = new Link({
    title:"Twitter",
    description:"Link para Twitter",
    url:"https://twitter.com/",
    click:0,

})

link.save()
    .then( doc => {
        console.log(doc);
    }).catch(err =>{
        console.log(err);
    })

mongoose.connect("mongodb://localhost/links")


let db = mongoose.connection

db.on("error", () => { console.log("Houve um erro") })
db.once("open", () => { console.log(`Banco Carregado`)})

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`aplicação rodando na Porta ${PORT}`);
})
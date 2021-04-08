const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Item = require("./models/Item");

const app = express();

mongoose.connect('mongodb+srv://digu:baban@2403@cluster0.4oo3o.mongodb.net/fruits', {useNewUrlParser: true});
mongoose.connection.once('open',()=>{
    console.log("Connection extablished");
})

app.use(cors());
app.use(express.json());



app.get("/",(req,res) => {
    Item.find()
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

app.get("/item/:itemid",(req,res) => {
    const id = req.params.itemid;
    Item.find({_id: id})
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

app.post("/item/:itemid/update",(req,res) => {
    const id = req.params.itemid;
    Item.updateOne({_id:id},{$set:{name:req.body.name,rating:req.body.rating}})
    .then((id) => res.send(id));
})

app.get("/item/:itemid/delete",(req,res) => {
    const id = req.params.itemid;
    Item.deleteOne({_id:id})
    .then((id) => res.send(id));
})

app.post("/",(req,res) => {
    const item = new Item(req.body);
    item.save().then((item) => res.json(item));
})

app.listen(4000,function () {
    console.log("Server started at port 4000");
})
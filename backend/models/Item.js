const mongoose = require("mongoose");

const item_schema = new mongoose.Schema({
    name: String,
    rating: Number
});

const Item = mongoose.model("Item",item_schema);

module.exports = Item;
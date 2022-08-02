const mongoose = require("mongoose")

const productsList = new mongoose.Schema({
    product_name : { type : String },
    product_price : { type : String },
    prod_desc : { type : String},
    inventory_count : { type : Number}
},
{
    versionKey : false,
    timestamps : true
}
)

const ProductsList = mongoose.model("productslist", productsList);

module.exports = ProductsList
const mongoose = require("mongoose");
const schema = mongoose.Schema;


const orderSchema = new schema({
    image_product:String,
    name_user:String,
    name_product:String,
    date:String,
    price:String,
    quantity:String,
    status:String
  });
  const Order = mongoose.model('Order', orderSchema);


  module.exports=Order;
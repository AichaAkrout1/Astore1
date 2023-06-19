const mongoose = require("mongoose");
const schema = mongoose.Schema;


const mobileSchema = new schema({
    image:String,
    name:String,
    price:Number,
    storage:String,
    quantity:Number,
    status:String
  });
  const Mobile = mongoose.model('Mobile', mobileSchema);


  module.exports=Mobile;
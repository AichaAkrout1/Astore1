const mongoose = require("mongoose");
const schema = mongoose.Schema;


const macSchema = new schema({
    image:String,
    name:String,
    price:String,
    storage:String,
    quantity:Number,
    status:String
  });
  const Mac = mongoose.model('Mac', macSchema);


  module.exports=Mac;
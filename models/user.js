const mongoose = require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema({
    image:{type: String, },
    name:{type: String, },
    lastname:{type: String, },
    email:{type: String, },
    NumberPhone:{type : Number,},
    password:{type: String, },
    isAdmin:{type: Boolean, default:false},
    isUser:{type: Boolean, default:true},

  });
  const User = mongoose.model('User', userSchema);


  module.exports=User;
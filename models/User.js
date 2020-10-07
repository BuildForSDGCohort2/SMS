const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name:{
       type:String
   },
   email:{
       type:String
   },
   password:{
       type:String
   },
   school_id:{
       type:String
   },
   created:{
       type:Date,
       default: Date.now()
   },
   type:{
     type:String
   }
})
const User = mongoose.model('User', UserSchema);
module.exports = User;

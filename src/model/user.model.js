const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        firstName:{
            type : String,
            required : true
        },
        lastName:{
            type: String,
        }
    },
    userName: {
        type: String,
        required: true,
        minLength: 4,
    },
    emailId: {
        type: String,
        require: true,
      },
    
      password: {
        type: String,
        required: true,
        minLength: 8,
      },
      phoneNumber:{
        countryCode : {
            type: Number
        },
        number : {
            type: Number
        }
      }
})

const User = mongoose.model("user-db", userSchema);
module.exports = User;
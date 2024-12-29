const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
  },
  username: {
    type: String,
    required: true,
    minLength: 4,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  phoneNumber: {
    countryCode: {
      type: Number,
      default: null,
    },
    number: {
      type: Number,
      default: null,
    },
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
});

const User = mongoose.model("user-db", userSchema);
module.exports = User;

const { Schema, model } = require("mongoose");



const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+).([a-zA-Z]+)$/;


const userSchema = new Schema({
  email: {type: String, required: [true, 'Email is required'], validate: {
    validator(value) {
      return EMAIL_PATTERN.test(value);
    },
    message: 'Email must be valid and may contain only english letters !'
  }},
  gender: {type: String, enum: ['male', 'female'], required: [true, 'Gender is required']},
  hashedPassword: { type: String, required: true },
});


const User = model('User', userSchema);

module.exports = User;
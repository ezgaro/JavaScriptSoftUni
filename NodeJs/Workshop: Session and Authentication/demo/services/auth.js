const User = require("../models/User");

async function register(username, password) {
  const user = new User({
    username,
    hashedPassword: password
  });
  try {
    await user.save();
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

module.exports = () => (req, res, next) => {
  req.auth = {
    register,
  };

  next();
};
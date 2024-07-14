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

async function login(username, password) {
  const user = await User.findOne({username});
  if(user && await user.comparePassword(password)) {
    return true;
  } else {
    throw new Error('Incorrect username or password');
  }
}

module.exports = () => (req, res, next) => {
  req.auth = {
    register,
    login
  };

  next();
};
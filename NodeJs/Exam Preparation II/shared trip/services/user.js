const User = require("../models/User");
const { hash, compare } = require("bcrypt");

async function register(email, password, repass, gender) {
  const existing = await getUserByEmail(email);
  if (existing) {
    throw new Error("Username is taken");
  }

  const hashedPassword = await hash(password, 10);
  const user = new User({
    email,
    hashedPassword,
    gender,
  });
  await user.save();
  return user;
}

async function login(email, password) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("Incorrect email or password");
  }
  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error("Incorrect email or password");
  }
  return user;
}

async function getUserByEmail(email) {
  return await User.findOne({ email: new RegExp(`^${email}$`, "i") });
}

async function pushTripToTripHistory(id, savedTrip) {
  await User.findByIdAndUpdate(
    id,
    {$push: {tripHistory: savedTrip._id}},
    { new: true, useFindAndModify: false }
  );
}

module.exports = {
  register,
  login,
  pushTripToTripHistory
};

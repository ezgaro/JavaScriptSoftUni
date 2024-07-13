const users = {
  svako: {
    username: "svako",
    password: "123",
  },
};

module.exports = () => (req, res, next) => {
  req.auth = {
    login,
    register
  };
  next();

  function login(username, password) {
    const user = users[username];
    if (user && password === user.password) {
      console.log("Successful login !!!");
      req.session.user = user;
      return true;
    } else {
      return false;
    }
  }

  function register(username, password) {
    if (users[username]) {
      return false;
    } else {
      const user = {
        username,
        password
      };
      users[username] = user;
      console.log(`Registered user ${username}`);
      return true;
    }
  }
};

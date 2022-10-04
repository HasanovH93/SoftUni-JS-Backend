const bcrypt = require("bcrypt");

const users = [];

async function register(username, password) {
  if (users.find((u) => u.username.toLowerCase() == username.toLowerCase())) {
    throw new Error("Username is taken");
  }

  const user = {
    username,
    hashedPassword: await bcrypt.hash(password, 10),
    failedAttempts: 0,
  };
  users.push(user);
}

async function login(username, password) {
  const user = users.find(
    (u) => u.username.toLowerCase() == username.toLowerCase()
  );

  if (!user) {
    return false;
  } else {
    const success = await bcrypt.compare(password, user.hashedPassword);
    if (success) {
        user.failedAttempts = 0;
      return true;
    } else {
      user.failedAttempts++;
      return false;
    }
  }
}

module.exports = {
  users,
  register,
  login,
};

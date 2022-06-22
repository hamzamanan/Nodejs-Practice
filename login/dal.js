const Users = require("./model");

async function signUp({ username, password }) {
  try {
    const createUsers = await Users.create(
      [
        {
          username,
          password,
        },
      ],
      { validateBeforeSave: true }
    );
  } catch (error) {
    throw error;
  }
}

module.exports = {
  signUp,
};

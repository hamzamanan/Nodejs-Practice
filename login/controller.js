const Users = require("./dal");

async function createUsers(req, res) {
  try {
    console.log(req.body);
    // const createUsers = await Users.signUp({ username, password });

    // if (createUsers) {
    //   res.status(200).send({
    //     success: true,
    //     data: createUsers,
    //     message: "users is created",
    //   });
    // } else {
    //   res.status(409).send({
    //     success: false,
    //     data: null,
    //     message: "something is wrong",
    //   });
    // }
  } catch (error) {
    throw error;
  }
}

module.exports = { createUsers };

require("dotenv").config();
let config = {};
config.PORT = process.env.PORT || 4000;
config.DB_USER = process.env.DB_USER || "hamzamanan";
config.DB_NAME = process.env.DB_NAME || "login";
config.DB_PASSWORD = process.env.DB_PASSWORD || "root123";
config.MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.dqc9k.mongodb.net/?retryWrites=true&w=majority`;
module.exports = config;

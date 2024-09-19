const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

const Note = sequelize.define("file", {
  content: {
    type: Sequelize.STRING,
    nullAllowed: false,
  },
});

module.exports = Note;

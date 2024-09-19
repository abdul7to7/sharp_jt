const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

const Company = sequelize.define("company", {
  id: {
    type: Sequelize.INTEGER,
    nullAllowed: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    nullAllowed: false,
  },
  maxSalary: {
    type: Sequelize.INTEGER,
  },
  location: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM(
      "bookmarked",
      "applied",
      "interviewing",
      "offered",
      "negotiating",
      "rejected"
    ),
    allowNull: false,
    defaultValue: "bookmarked",
  },
  deadline: {
    type: Sequelize.DATE,
  },
});
module.exports = Company;

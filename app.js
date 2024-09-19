const express = require("express");
require("dotenv").config();
const sequelize = require("./utils/db");
const User = require("./models/userModel");
const Company = require("./models/companyModel");
const File = require("./models/fileModel");
const Reminder = require("./models/reminderModel");
const Note = require("./models/noteModel");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

User.hasMany(Company, { onDelete: "CASCADE" });
Company.belongsTo(User);
Company.hasMany(File, { onDelete: "CASCADE" });
File.belongsTo(Company);
Company.hasMany(Reminder, { onDelete: "CASCADE" });
Reminder.belongsTo(Company);
Company.hasMany(Note, { onDelete: "CASCADE" });
Note.belongsTo(Company);

const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);

sequelize
  //   .sync({ force: true })
  // .sync({ alter: true })
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .then(() => {
    console.log("server is running");
  });

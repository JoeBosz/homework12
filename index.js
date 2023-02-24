const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect((err) => {
  if (err) throw err;
  console.log("connected");
  //Execute main app function here
});

const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();


const connection = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: process.env.DB_USER,
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);

connection.query(
  'SELECT * FROM `department` ',
  function(err, results) {
    if (err) {
      console.error(err)
    }
    console.table(results); // results contains rows returned by server
  }
);

// const questions = [
//   {
//     name: "name",
//     message: "What is your name?",
//     type: "input",
//   },
//   {
//     name: "id",
//     message: "What is your team memeber's id?",
//     type: "input",
//   },
//   {
//     name: "email",
//     message: "What is your email?",
//     type: "input",
//   },
// ];

// const createManager = () => {
//   inquirer
//     .prompt([
//       ...questions,
//       {
//         name: "officeNumber",
//         message: "What is your officeNumber?",
//         type: "input",
//       },
//     ])
//     .then((answers) => {
//       const manager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.officeNumber
//       );
//       employees.push(manager);
//       createTeamMember();
//     });
// };

// const createTeamMember = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "option",
//         message: "What team member would you like to add?",
//         choices: [
//           "Engineer",
//           "Intern",
//           "I don't want to add any more team members",
//         ],
//       },
//     ])
//     .then((answers) => {
//       if (answers.option === "Engineer") {
//         return createEngineer();
//       }

//       if (answers.option === "Intern") {
//         return createIntern();
//       }

//       return createHTML();
//     });
// };

// const team = [];

// function init() {
//   console.log("Getting manager info");
//   menu();
// }

// function menu() {
//   inquirer.prompt(Questions.menu).then((answers) => {
//     if (answers.option === "Engineer") {
//       return createEngineer();
//     }

//     if (answers.option === "Intern") {
//       return createIntern();
//     }

//     return createHTML();
//   });
// }

// function createEngineer() {
//   inquirer
//     .prompt([
//       ...questions,
//       {
//         name: "github",
//         message: "What is your github?",
//         type: "input",
//       },
//     ])
//     .then((answers) => {
//       const engineer = new Engineer(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.github
//       );
//       employees.push(engineer);
//       createTeamMember();
//     });
// }

// function createIntern() {
//   inquirer
//     .prompt([
//       ...questions,
//       {
//         name: "school",
//         message: "Where did you attened schoool?",
//         type: "input",
//       },
//     ])
//     .then((answers) => {
//       const intern = new Intern(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.school
//       );
//       employees.push(intern);
//       createTeamMember();
//     });
// }

// function createHTML() {
//   fs.writeFileSync("./Employee.html", htmlTemplate(employees));
// }

// createManager();


connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  //Execute main app function here
});

import mysql from "mysql2";
import inquirer from "inquirer";
import dotenv from "dotenv";
import {
  questions,
  addDepartment,
  addEmployee,
  addRole,
  UpdateRole,
  viewByDept,
} from "./employeeqs.js";

const connection = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "Fun",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);




function promptDeptQuestions(questionDept) {
  inquirer.prompt(questionDept).then((response) => {
    connection.query(
      `INSERT INTO department (name) VALUE ('${response.departmentName}')`
    );
    promptViewQuestions(questions);
  });
}

function promptRoleQuestions(questionRole) {
  inquirer.prompt(questionRole).then((response) => {
    connection.query(
      `INSERT INTO role (title, salary, department_id) VALUE ('${response.roleTitle}', ${response.roleSalary}, ${response.roleDeptID})`
    );
    promptViewQuestions(questions);
  });
}

function promptEmployeeQuestions(questionRole) {
  inquirer.prompt(questionRole).then((response) => {
    connection.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('${response.firstName}', '${response.lastName}',${response.roleID}, ${response.managerID})`
    );
    promptViewQuestions(questions);
  });
}

function promptUpdateQuestions(questionRole) {
  inquirer.prompt(questionRole).then((response) => {
    connection.query(
      `UPDATE employee SET role_id = ${response.updateRole} WHERE id = '${response.updateID}'`
    );
    promptViewQuestions(questions);
  });
}

function promptViewQuestions(questionsRole) {
  inquirer.prompt(questionsRole).then((response) => {
    if (response.OpeningMenu === "I am done") {
    }
    if (response.OpeningMenu === "View All Departments") {
      connection.query("SELECT * FROM department", (err, results) => {
        if (err) {
          console.log(err);
        }
        console.table(results);
      });
      promptViewQuestions(questions);
    }
    if (response.OpeningMenu === "View All Roles") {
      connection.query(
        "SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id",
        (err, results) => {
          console.table(results);
        }
      );
      promptViewQuestions(questions);
    }
    if (response.OpeningMenu === "View All Employees") {
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id; ",
        (err, results) => {
          console.table(results);
        }
      );
      promptViewQuestions(questions);
    }
    if (response.OpeningMenu === "Add A Department") {
      promptDeptQuestions(addDepartment);
    }
    if (response.OpeningMenu === "Add A Role") {
      promptRoleQuestions(addRole);
    }
    if (response.OpeningMenu === "Add An Employee") {
      promptEmployeeQuestions(addEmployee);
    }
    if (response.OpeningMenu === "Update An Employee Role") {
      promptUpdateQuestions(UpdateRole);
    }
    if (response.OpeningMenu === "View employees by department") {
      promptDeptQuestions(viewByDept);
    }
  });
}

promptViewQuestions(questions);

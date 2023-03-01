import mysql from "mysql2";
import inquirer from "inquirer";
import dotenv from "dotenv";
import { questions } from "./employeeqs.js";

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

connection.query(
  'SELECT * FROM `department` ',
  function(err, results) {
    if (err) {
      console.error(err)
    }
    console.table(results); // results contains rows returned by server
  }
);

inquirer.prompt(questions).then((response) => {
  if (response.OpeningMenu === "I am done") {
  } else if (response.OpeningMenu === "View all departments") {
    db.query("SELECT * FROM department", (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    });
    promptViewQuestions(questions);
  } else if (response.OpeningMenu === "View all roles") {
    db.query("SELECT role.id, role.title, role.salary, department.name FROM role JOIN departments ON role.department_id = deprtmentss.id", 
    (err, results) => {
      console.table(results);
    });
    promptViewQuestions(questions);
  } else if (response.OpeningMenu === "View all employees") {
    db.query("SELECT e.id,CONCAT(e.first_name, ' ', e.last_name) AS 'Employee, INFULL( CONCAT(m.first_name, ' ', m.last_name), 'Executive') AS 'Manager', role.title AS title, role.salary AS salary, department.name AS department FROM employee e LEFT JOIN employee m ON m.id = e.manager_id JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id ", 
    (err, results) => {
      console.table(results);
    }
    );
    promptViewQuestions(questions);
  } else if (response.OpeningMenu === "Add a department") {
    promptDeptQuestions(addDepartment);
  } else if (response.OpeningMenu === "Add a role") {
    promptRoleQuestions(addRole);
  } else if (response.OpeningMenu === "Add an employee") {
    promptEmployeeQuestions(addEmployee);
  } else if (response.OpeningMenu === "Update an employee role") {
    promptUpdateQuestions(UpdateRole);
  } else if (response.OpeningMenu === "View employees by department") {
    promptDeptQuestions(viewByDept);
  }
});
    
function promptDeptQuestions(questionDept){
  inquirer.prompt(questionDept).then((response) => {
    db.query(
      `INSERT INTO department (name) VALUE ('$response.departmentName')`
    );
    promptViewQuestions(questions);
  });
}

function promptRoleQuestions(questionRole){
  inquirer.prompt(questionRole).then((response) => {
    db.query(
      `INSERT INTO role (title, salary, department_id) VALUE ('$response.roleName', '{$response.roleSalary'}, {'$response.roleDeptId'})`
    );
    promptViewQuestions(questions);
  });
}

function promptEmployeeQuestions(questionRole){
  inquirer.prompt(questionRole).then((response) => {
    db.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('$response.firstName', '{$response.lastName'}, {'$response.roleId'}, {'$response.managerId'})`
    );
    promptViewQuestions(questions);
  });
}

function promptUpdateQuestions(questionRole){
  inquirer.prompt(questionRole).then((response) => {
    db.query(
      `UPDATE employee SET role_id = ${response.updateRole} WHERE first_name = '{$response.updateFirstName}' AND last_name = '{$response.updateLastName}'`
    );
    promptViewQuestions(questions);
  });
}

function promptViewQuestions(questionsRole){
  inquirer.prompt(questionsRole).then((response) => {
    db.query(
      `SELECT e.id,CONCAT(e.first_name, ' ', e.last_name) AS 'Employee, INFULL( CONCAT(m.first_name, ' ', m.last_name), "Executive") AS 'Manager', role.title AS title, role.salary AS salary, department.name AS department FROM employee e LEFT JOIN employee m ON m.id = e.manager_id JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id WHERE department.name = '${response.viewDeptID}'`,
      (err, results) => {
        console.table(results);
      }
      );
      promptViewQuestions(questions);
    });
  }



function questionsSetRedirect(response) {
  if (response.OpeningMenu === "I am done") {
  } else if (response.OpeningMenu === "View all departments") {
    db.query("SELECT * FROM department", (err, results) => {
      console.table(results);
    });
    promptViewQuestions(questions);
  } else if (response.OpeningMenu === "View all roles") {
    db.query("SELECT role.id, role.title, role.salary, department.name FROM role JOIN departments ON role.department_id = deprtmentss.id", 
    (err, results) => {
      console.table(results);
    });
    promptViewQuestions(questions);
  } else if (response.OpeningMenu === "View all employees") {
    db.query("SELECT e.id,CONCAT(e.first_name, ' ', e.last_name) AS 'Employee, INFULL( CONCAT(m.first_name, ' ', m.last_name), 'Executive') AS 'Manager', role.title AS title, role.salary AS salary, department.name AS department FROM employee e LEFT JOIN employee m ON m.id = e.manager_id JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id ", 
    (err, results) => {
      console.table(results);
    }
    );
    promptViewQuestions(questions);
  } else if (response.OpeningMenu === "Add a department") {
    promptDeptQuestions(addDepartment);
  } else if (response.OpeningMenu === "Add a role") {
    promptRoleQuestions(addRole);
  } else if (response.OpeningMenu === "Add an employee") {
    promptEmployeeQuestions(addEmployee);
  } else if (response.OpeningMenu === "Update an employee role") {
    promptUpdateQuestions(UpdateRole);
  } else if (response.OpeningMenu === "View employees by department") {
    promptDeptQuestions(viewByDept);
  }
}




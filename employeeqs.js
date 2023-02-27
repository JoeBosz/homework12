const questions = [
    {
      type: "list",
      name: "OpeningMenu",
      message: "Who would you like to add next?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "View Employees by Dept",
        "Add A Department",
        "Add A Role",
        "Add An Employee",
        "Update An Employee Role",
        "I am Finished!!",
      ],
    },
  ];

  const addDepartment = [
    {
        type: "input",
        name: "departmentName",
        message: "What is the name of the department you would like to add?",
    },
    ];

    const addEmployee = [
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the first name of the employee you would like to add?",
        },
        { 
            type: "input",
            name: "employeeLastName",
            message: "What is the last name of the employee you would like to add?",
        },
        { 
            type: "input",
            name: "employeeRoleID",
            message: "What is the role ID of the employee you would like to add?", 
        },
        {
            type: "input",
            name: "employeeManagerID",
            message: "What is the manager ID of the employee you would like to add?",
        },
        ];

        const addRole = [
            { 
                type: "input",
                name: "roleTitle",
                message: "What is the title of the role you would like to add?",
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What is the salary of the role you would like to add?",
            },
            {
                type: "input",
                name: "roleDeptID",
                message: "What is the department ID of the role you would like to add?",
            },
            ];

        const UpdateRole = [ 
            {
                type: "input",
                name: "updateFirstName",
                message: "What is the title of the role you would like to add?",
            },
            {
                type: "input",
                name: "updateLastName",
                message: "What is the last name of the employee you would like to update?",
            },
            {
                type: "input",
                name: "updateRole",
                message: "What is the new role ID of the employee you would like to update?",
            },
            ];

            const viewByDept = [ 
                {
                    type: "input",
                    name: "viewDeptId",
                    message: "What is the department ID of the employees you would like to view?"
                },
                ];
        
  export { questions,
    addDepartment,
    addEmployee,
    addRole,
    UpdateRole,
    viewByDept,
  };
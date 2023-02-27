INSERT INTO department (name)
VALUES ('Sales'), ('Marketing'), ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Sales Representative', 50000.00, 1),
    ('Sales Manager', 80000.00, 1),
    ('Marketing Coordinator', 45000.00, 2),
    ('Marketing Manager', 70000.00, 2),
    ('Software Engineer', 90000.00, 3),
    ('Senior Software Engineer', 120000.00, 3),
    ('Engineering Manager', 150000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manger_id)
VALUES 
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mark', 'Johnson', 3, 1),
    ('Sara', 'Williams', 4, NULL),
    ('David', 'Lee', 5, 2),
    ('Karen', 'Chen', 6, 4),
    ('Michael', 'Nguyen', 7, 4);

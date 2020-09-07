USE employees;
INSERT INTO department (name)
VALUES ("sales"),
    ("finance"),
    ("engineering"),
    ("legal");

INSERT INTO role (title,salary,department_id)
VALUES ("sale lead",80000.00,1),
        ("manager",200000.00,1)
-- add others from above

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("John","Smith", 1,2),
        ("Bob","Brown",2,null)
        -- add more employees

        
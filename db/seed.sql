USE employees;
INSERT INTO department (name)
VALUES ("sales"),
    ("finance"),
    ("engineering"),
    ("legal");

INSERT INTO role (title,salary,department_id)
VALUES ("sale lead",80000.00,1),
        ("manager",200000.00,1)
        ("sale associate",50000.00,1)
        ("accountant",60000.00,2)
        ("senior account",200000.00,2)
        ("bookkeeper",50000.00,2)
        ("lead engineer",200000.00,3)
        ("engineer",100000.00,3)
        ("junior engineer",60000.00,3)
        ("lead lawyer",150000.00,4)
        ("lawyer",100000.00,4)
        ("paralegal",60000.00,4)


INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("Sirius","Black", 1,2),
       ("Ginny","Weasley",2,null)
       ("Luna","Lovegood", 1,2),
       ("Severus","Snape",2,null),
       ("Hermione","Granger", 1,2),
       ("Draco","Malfoy",2,null)
       ("John","Smith", 1,2),
       ("Ron","Weasley",2,null),
       ("Rubeus","Hagrid", 1,2),
       ("Remus","Lupin",2,null)
       ("Nevillie","Longbottom", 1,2),
       ("Dolores","Umbridge",2,null)














        -- add more employees


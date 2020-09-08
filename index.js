// const DB = require("./db");
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    inquirer.prompt([{
        type: "list",
        name: "prompt",
        message: "How would you like to began",
        choices: ["Add Department", "View Departments","Exit"]
    }]).then(data => {
        console.log(data)
        switch (data.prompt) {
            case "Add Department":
                addDepartment();
                break;
            case "View Departments":
                viewDepartment();
                break;
            case "Exit":
                connection.end()
        }

    })
}

function addDepartment() {
    console.log("add")
    inquirer.prompt([
        {
           type:"input"
           name:department_id
           message:


        }

    ])
    start()
}

function viewDepartment() {
    console.log("view")
    start()
}
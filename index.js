// const DB = require("./db");
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");
const db = require("./db")

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

function departmentMenu() {
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
                start();

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
    console.log;("view")
    let dept = db.viewDepartments();
    console.table(dept);
    start();
}
function start () {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "How would you like to began",
        choices: ["Department Menu", "Roles Menu","Employee Menu"]
    }]).then(data => { 
        console.log(data)
        switch (data.menu) {
            case "Department Menu":
                departmentMenu();
                break;
            case "Roles Menu":
                rolesMenu();
                break;
            case "Employee Menu":
                employeeMenu();
                break;
    }});

}

function viewRole() {
    console.log;("view")
    let dept = db.viewRole();
    console.table(dept);
    start();
}
function departmentMenu () {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "How would you like to began",
        choices: ["Department Menu", "Roles Menu","Employee Menu"]
    }]).then(data => { 
        console.log(data)
        switch (data.menu) {
            case "Department Menu":
                departmentMenu();
                break;
            case "Roles Menu":
                rolesMenu();
                break;
            case "Employee Menu":
                employeeMenu();
                break;
    }});

}

function viewEmployee() {
    console.log;("view")
    let dept = db.viewEmployee();
    console.table(dept);
    start();
}
function rolesMenu () {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "How would you like to began",
        choices: ["Department Menu", "Roles Menu","Employee Menu"]
    }]).then(data => { 
        console.log(data)
        switch (data.menu) {
            case "Department Menu":
                departmentMenu();
                break;
            case "Roles Menu":
                rolesMenu();
                break;
            case "Employee Menu":
                employeeMenu();
                break;
    }});

}

function viewEmployee() {
    console.log;("view")
    let dept = db.viewEmployee();
    console.table(dept);
    start();
}
function rolesMenu () {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "How would you like to began",
        choices: ["Department Menu", "Roles Menu","Employee Menu"]
    }]).then(data => { 
        console.log(data)
        switch (data.menu) {
            case "Department Menu":
                departmentMenu();
                break;
            case "Roles Menu":
                rolesMenu();
                break;
            case "Employee Menu":
                employeeMenu();
                break;
    }});
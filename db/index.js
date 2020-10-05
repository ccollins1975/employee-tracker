const connection = require("./connection");
class DB{
    constructor(connection){
        this.connection=connection;
    }
    createEmployee(employee){
        return this.connection.query("INSERT INTO employee SET ?",employee);
    }
    createDepartment(department){
        return this.connection.query("INSERT INTO department SET ?",department);
    }
    createRole(role){
        return this.connection.query("INSERT INTO role SET ?",role);
    }
    viewDepartments(){
        return this.connection.query("SELECT * FROM department");
    }
    viewRole(){
        return this.connection.query("SELECT * FROM role");
    }
    viewEmployee(){
        return this.connection.query("SELECT * FROM employee");
    }
    updateEmployee(id_employee, id_role){
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ? ",
        [id_role,id_employee]);
    }
}
// add department and Role,find depart roles and employees,update for employees use icecream crud

module.exports=new DB(connection);

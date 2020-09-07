const connection = require("./connection");
class DB{
    constructor(connection){
        this.connection=connection;
    }
    createEmployee(employee){
        return this.connection.query("INSERT INTO employee SET ?",employee);
    }
}
// add department and Role,find depart roles and employees,update for employees use icecream crud
function department(){
const query = connection.query(
    "INSERT INTO products SET ?",
    {
        // do i add all the departments here?
    }
)

}
module.exports=new DB(connection);

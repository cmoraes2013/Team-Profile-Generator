// require Employee class
const Employee = require("./employee");


// create a class called intern that extends Employee
class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.school = school

        
    };
    
    getSchool() {
        return this.school;
    };
    getRole() {
        return Intern;
    };
}

// export intern




module.exports = Intern;
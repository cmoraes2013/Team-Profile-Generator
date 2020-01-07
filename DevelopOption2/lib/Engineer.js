// require Employee class
const Employee = require("./employee");

// create a class called Engineer that extends Employee

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub,) {
        super (name, id, email, role);
        this.gitHub = gitHub;        
    }

    getgitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}


// export employee

 module.exports = Engineer;
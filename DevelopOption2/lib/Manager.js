// require Employee class
const Employee = require("./employee");


// create a class called manager that extends Employee

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber){
        super(name, id, email, role)
        this.officeNumber = officeNumber        
    }
    
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}
// export manager



module.exports = Manager;
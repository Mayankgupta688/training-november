class Employee {
    constructor(name) {
        this.name = name;
    }

    getDetails() {
        console.log(this.name)
    }

    getOtherInfo() {
        console.log("Data")
    } 
}

class Manager extends Employee {
    constructor(name) {
        super(name)
        this.teamSize = 20;
    }

    getTeamSize() {
        console.log(this.teamSize)
    }
}

var employeeOne = new Manager("Mayank");

debugger;

employee.getDetails();

debugger;

console.log(employeeOne.name)
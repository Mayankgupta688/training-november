export class Employee {
    userFirstName: string;
    userLastName: string;

    constructor(first, last) {
        this.userFirstName = first;
        this.userLastName = last;
    }
}

export class Student {
    userFirstName: string;
    userLastName: string;

    constructor(first, last) {
        this.userFirstName = first;
        this.userLastName = last;
    }
}

export var util = {
    employeeClass: Employee,
    studentClass: Student
}
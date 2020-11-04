class Employee {
    private _name: string;
    private age: number;
    private designation: string;
    private salary: number;

    constructor(name: string, age: number, designation: string) {
        this._name = name;
        this.age = age;
        this.designation = designation;
        this.salary = 0;
    }

    set name(value) {
        if(value === "") {
            this._name = 'Default';
        }
        this._name = "Default";
    }

    get name() {
        return this._name;
    }

    getDetails() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.designation)
    }
}

var employeeOne = new Employee("Mayank", 20, 'Developer');
employeeOne.name = "";
console.log(employeeOne.name)

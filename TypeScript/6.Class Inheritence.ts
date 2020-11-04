// Prototype Patterns in JavaScript....

// Prototypical Inheritence JavaScript...

class Employee {
    public name: string;
    getData() {
        console.log("Parent Class");
    }
}

class Manager extends Employee {
    public teamSize: number;
    getManagerData() {
        console.log("This is Manager")
    }
}

var managerData = new Manager();
managerData.getData()
managerData.getManagerData();
managerData.name = "Mayank";

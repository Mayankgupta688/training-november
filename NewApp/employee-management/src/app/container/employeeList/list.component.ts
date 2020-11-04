import { Component } from "@angular/core";
import IEmployee from "../../Interfaces/IEmployee";
import * as employeeList from "../../data/employeeList.json";

@Component({
    selector: "employee-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./styles/list.component.css"]
})
export default class EmployeeListComponent { 
    userList: IEmployee[] = []

    constructor() {
        this.userList = employeeList["default"];
    }
    
    deleteUser(userId) {
        this.userList = this.userList.filter((employee) => {
            return employee.id != userId
        });
    }

    updateName() {
        this.buttonText = "Updated Button Text";
    }

    getButtonName() {
        return this.buttonText;
    }

    showDetails() {
        debugger;
        return true;
    }

    buttonText = "Click To Get Data";
    showDeleteButton: boolean = true;
    showEmployee: boolean = true;

    alertUserData(data) {
        debugger;
        alert("This is Event");
    }
}

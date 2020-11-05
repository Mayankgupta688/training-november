import { Component, EventEmitter } from "@angular/core";
import { EmployeeDataService } from '../../services/employee.service';
import IEmployee from "../../Interfaces/IEmployee";

@Component({
    selector: "employee-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./styles/list.component.css"]
})
export default class EmployeeListComponent { 
    userList: IEmployee[] = [];
    userName: string = "Mayank";
    notifyChild: EventEmitter<string>;

    constructor(private _employeeService: EmployeeDataService) {
        debugger;
        this.notifyChild = new EventEmitter<string>();
        this.userList = this._employeeService.getEmployeeData();

        this.notifyChild.subscribe((data) => {
            alert(data)
        })
    }

    changeName() {
        this.userName = "Anshul";
    }

    notifyChildElemnt() {
        this.notifyChild.emit("Child Notified")
    }

    deleteEmployeeFromParent(employeeId) {
        this.userList = this.userList.filter((employee) => {
            return employee.id != employeeId;
        })
    }

    notifyUser(employeeId) {
        alert("Notify data from Parent Component " + employeeId)
    }
}

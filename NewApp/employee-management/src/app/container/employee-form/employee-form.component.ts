import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/Employee";
import { EmployeeDataService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  constructor(private _employeeDataService: EmployeeDataService) {
    console.log(this._employeeDataService.randomUserData)
  }
  
  private user = new Employee("Aniket", "Gupta");

  public _userName: string = "Mayank";
  public _userNameSecond: string = "Gupta";

  get userName() {
    return this.user.userFirstName + " " +this.user.userLastName;
  }

  set userName(initialValue) {
    this._userName = initialValue.replace("_", " ");
  }

  updateData(data) {
  }

  getData() {
    alert(this._userName)
  }

  setData() {
    this.userName = "Anshul"
  }
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IEmployee from 'src/app/Interfaces/IEmployee';
import { EmployeeDataService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  @Input() employee: IEmployee;
  @Input() user: string;
  @Input() notifyChild: EventEmitter<string>;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyUserClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _employeeDataService: EmployeeDataService) {
    console.log(this._employeeDataService.randomUserData)
  }

  ngOnInit() {
    this.notifyChild.subscribe((data) => {
      console.log(`Data from Child: ${data}`);
      this.employee.name = "";
    })
  }

  deleteEmployee(empId) {
    this.notify.emit(empId);
    this.notifyChild.emit("sdagidgasudg")
  }

  notifyEmployee(empId) {
    this.notifyUserClicked.emit(empId);
  }
}

import { Component } from '@angular/core';
import { EmployeeDataService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empList = [];
  constructor(private _employeeDataService: EmployeeDataService) {
    this._employeeDataService.getEmployeeData().subscribe((data) => {
      this.empList = data
    })
  }

  title = 'single-page-app...';
}

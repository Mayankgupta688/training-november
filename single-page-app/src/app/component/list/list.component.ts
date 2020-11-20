import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { EmployeeDataService } from '../../service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  empList: any = [];
  limitTo: number = 3;
  constructor(private _http: HttpClient, private _router: Router, private _employeeDataService: EmployeeDataService) {}

  redirectToDetails(userId) {
    this._router.navigate(["/details", userId, "Mayank"], { state: { hiddenData: "1234" } })
  }

  deleteEmployee(userId) {
    this.empList = this.empList.filter((employee) => {
      return userId != employee.id
    })

    this._employeeDataService.empList = this.empList;
  }

  ngOnInit(): void {
    this._employeeDataService.getEmployeeData().subscribe((data) => {
      this._employeeDataService.empList = data;
      this.empList = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { EmployeeDataService } from '../../service/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userDetails: any = {
    userName: ""
  };

  userOtherData = "";

  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _router: Router,  private _employeeDataService: EmployeeDataService) { }

  ngOnInit(): void {
    debugger;
    var userId = this._route.snapshot.paramMap.get("id");
    this.userOtherData = this._route.snapshot.paramMap.get("name");

    this.userDetails.userName = this._employeeDataService.empList.filter((employee) => {
      return employee.id == userId
    })[0].name;
  }

}

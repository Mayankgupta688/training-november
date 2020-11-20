import { Component } from '@angular/core';
import { AppService } from "./service/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  employeeList: any = [];

  constructor(private _appService: AppService) {
    this.title = this._appService.getData();
    this._appService.getEmpList().subscribe((data) => {
      this.employeeList = data;
  });
  }
}

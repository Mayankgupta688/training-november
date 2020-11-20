import { from } from 'rxjs';
import { BrowserModule } from "@angular/platform-browser";
import { Component, NgModule } from "@angular/core";
import EmployeeListComponent from "./container/employeeList/list.component";
import { DelayRenderingDirective } from "./directives/DelayRenderingDirective";
import { EmployeeFormComponent } from './container/employee-form/employee-form.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { FormsModule } from "@angular/forms";
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';

import { HttpClientModule } from "@angular/common/http";
@NgModule({
    declarations: [
        EmployeeListComponent, 
        DelayRenderingDirective, 
        EmployeeFormComponent, 
        EditEmployeeComponent, 
        EmployeeDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ], bootstrap: [EmployeeListComponent, EmployeeFormComponent]
})
export class EmployeeModule {}
import { from } from 'rxjs';
import { BrowserModule } from "@angular/platform-browser";
import { Component, NgModule } from "@angular/core";
import EmployeeListComponent from "./container/employeeList/list.component";
import { DelayRenderingDirective } from "./directives/DelayRenderingDirective";

@NgModule({
    declarations: [EmployeeListComponent, DelayRenderingDirective],
    imports: [
        BrowserModule
    ], bootstrap: [EmployeeListComponent]
})
export class EmployeeModule {}
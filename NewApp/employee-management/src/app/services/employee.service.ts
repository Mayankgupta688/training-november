import { Injectable } from "@angular/core";
import * as data from "../data/employeeList.json";
import IEmployee from "../Interfaces/IEmployee";

@Injectable({
    providedIn: "root"
})
export class EmployeeDataService {
    getEmployeeData(): IEmployee[] {
        return data["list"];
    }

     randomUserData: string = "Samplpe Data";
}
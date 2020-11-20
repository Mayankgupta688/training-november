import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import IEmployee from "../Interfaces/IEmployee";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class EmployeeDataService {

    constructor(private _http: HttpClient) {}

    getEmployeeData(): Observable<any> {
        debugger;
        return this._http.get("http://localhost:4000/empList")
    }

    addNewData(): Promise<any> {
        return this._http.post("http://localhost:4000/empList", {
            id: "1030",
            avatar: "fdksjfhskf",
            name: "Anshul",
            createdAt: "None"
        }).toPromise()
    }

     randomUserData: string = "Samplpe Data";
}
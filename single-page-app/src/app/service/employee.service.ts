import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class EmployeeDataService {

    empList = [];
    constructor(private _http: HttpClient) {}

    getEmployeeData(): Observable<any> {
        return this._http.get("/api/empList")
    }
}
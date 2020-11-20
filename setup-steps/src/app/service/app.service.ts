import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class AppService {

    constructor(private _http: HttpClient) { }

    getData() {
        return "Hello World..."
    }

    getEmpList() {
        return this._http.get('https://5a530e1477e1d20012fa066a.mockapi.io/employeedata')
    }
}
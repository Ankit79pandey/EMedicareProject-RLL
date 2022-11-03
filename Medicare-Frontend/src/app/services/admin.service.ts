import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminAuthenticationStatus } from "../models/adminauthenticationstatus.model";



@Injectable()
export class AdminService{
    constructor(private httpClient: HttpClient){}
    authenticate(
        username: String,
        password: string
    ): Observable<AdminAuthenticationStatus>{
        console.log(username, password);
        let body={
            admin: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<AdminAuthenticationStatus>(
            'http://localhost:8899/api/v1/admin',
            body,
            {
                headers: headers,
            }
        );
    }
}
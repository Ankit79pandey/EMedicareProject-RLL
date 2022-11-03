import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationStatus } from "../models/authenticationstatus.model";
import { users } from "../models/users.model";

@Injectable()
export class UserService{
    constructor(private httpClient: HttpClient){}
    authenticate(
        username: String,
        password: string
    ): Observable<AuthenticationStatus>{
        console.log(username, password);
        let body={
            username: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<AuthenticationStatus>(
            'http://localhost:8899/api/user',
            body,
            {
                headers: headers,
            }
        );
    }


    



}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { users } from "../models/users.model";

@Injectable({
    providedIn:"root"
  })
  export class Registrationservice{
      constructor(private _http:HttpClient){}
      register(
          first_name:string,
          last_name: string,
          mobile_no: number,
          age:string,
          username: String,
          password: string,
          gender:string
      ): Observable<users>{
          console.log(first_name,last_name,mobile_no,age,username, password,gender);
          let body={
              first_name:first_name,
              last_name:last_name,
              mobile_no:mobile_no,
              age:age,
              username: username,
              password: password,
              gender: gender,
          };
          let headers = new HttpHeaders({
              'content-type': 'application/json',
          });
          return this._http.post<users>(
              'http://localhost:8899/api/users',
              body,
              {
                  headers: headers,
              }
          );
  
  }}
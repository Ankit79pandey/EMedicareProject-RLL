
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ViewcontactusComponent } from '../viewcontactus/viewcontactus.component';

@Injectable()
export class ContactService {

  constructor(private _http:HttpClient) { }
  viewAll():Observable<Contact[]>{
    return this._http.get<Contact[]>(`http://localhost:8899/api/v3/contactUs`);
    
  }
  contactus(
    name: string,
    emailId: string,
    contactNo: number,
    description: string,
  ) : Observable<Contact>{
    console.log(name,emailId,contactNo,description);
    let body={
      name:name,
      emailId:emailId,
      contactNo:contactNo,
      description:description
};
let headers = new HttpHeaders({
  'content-type': 'application/json',
});
return this._http.post<Contact>(
  `http://localhost:8899/api/v3/contactUs`,
  body,
  {
      headers: headers,
  }
);
  }
  }
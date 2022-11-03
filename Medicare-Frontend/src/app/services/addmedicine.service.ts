import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Addmedicine } from "../models/addmedicine.model";

@Injectable({
  providedIn: 'root'
})
export class AddmedicineService {

  constructor(private _http:HttpClient) { }
  addmedicine(
    medicineName: string,
    manufactureDate: string,
    type: string,
    price:string,
    description:string,
    expdate:string,
    status:string,
    seller:string
  ) : Observable<Addmedicine>{
        console.log(medicineName,manufactureDate,type,price,description,expdate,status,seller);
        let body={
          medicineName:medicineName,
          manufactureDate:manufactureDate,
          type:type,
          price:price,
          description:description,
          expdate:expdate,
          status:status,
          seller:seller,
        };
        let headers = new HttpHeaders({
          'content-type': 'application/json',
      });
      return this._http.post<Addmedicine>(
        'http://localhost:8899/api/v2/medicines',
        body,
        {
            headers: headers,
        }
    );


  }
}

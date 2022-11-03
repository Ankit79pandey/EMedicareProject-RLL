import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { medicines } from "../models/medicines.model";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class MedicineService{
    constructor(private httpClient:HttpClient){}

    getMedicines():Observable<medicines[]>{
        return this.httpClient.get<medicines[]>('http://localhost:8899/MedicineList/medicines');
    }
    deleteM(medicineid:number){
        return this.httpClient.delete(`http://localhost:8899/MedicineList/medicines/${medicineid}`);
    }
    getMedicine(medicineId:number):Observable<medicines>{
        return this.httpClient.get<medicines>(`http://localhost:8899/MedicineList/medicines/${medicineId}`);
    }
    updateM(
        medicineId:number,
        medicineName: string,
        manufactureDate: string,
        type: string,
        price:string,
        description:string,
        expdate:string,
        status:string,
        seller:string
      ) : Observable<medicines>{
            console.log(medicineId,medicineName,manufactureDate,type,price,description,expdate,status,seller);
            let body={
                medicineId:medicineId,
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
          return this.httpClient.put<medicines>(
            'http://localhost:8899/api/v2/medicines',
            body,
            {
                headers: headers,
            }
        );
    
    
      }
}

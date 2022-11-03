import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MedicineClass } from './MedicineClass';

@Injectable({
  providedIn: 'root'
})
export class MedicinelistService {
  url:string="http://localhost:8899/MedicineList/medicines";



  constructor(private http:HttpClient,private router:Router) { }
  getAllUsers():Observable <MedicineClass[]>{

    return this.http.get<MedicineClass[]>(this.url);
    
    }
    UpdateUserDetailing(data:any, medicine_id:number)
  {
    return this.http.put<any>("http://localhost:8899/MedicineList/medicine/"+medicine_id ,data).pipe(map((res:any)=> {
     
    
      return res
    }))
  }

  // Delete Method For Update Student
  DeleteUserDetails(medicine_id:number)
  {
    return this.http.delete("http://localhost:8899/MedicineList/medicines/" + medicine_id);
  }
}

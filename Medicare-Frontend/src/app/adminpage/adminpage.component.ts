import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MedicinelistService } from '../medicinelist.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MedicineClass } from '../MedicineClass';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  
  constructor(private service:MedicinelistService,private formBuilder:FormBuilder ,private http:HttpClient,private router:Router) { }
  public form!:FormGroup
  medicine:MedicineClass[]=[];
  medicineObj:MedicineClass=new MedicineClass()
  visible:boolean=true
  Editbutton:boolean=true
  btnUpdateShow:boolean = false;

  btnSaveShow:boolean = true;

  medicineId:number=0;
 


    ngOnInit(): void {
      this.service.getAllUsers().subscribe(result=>this.medicine=result);
      this.form=this.formBuilder.group({
        description:[''],
        expdate:[''],
        manufactureDate:[''],
        medicineName:[''],
        price:[''],
        seller:[''],
        status:[''],
        type:[''],
        stock:['']
      
      })
    }

    onClick(){

      this.visible=!this.visible
    }
    AddMedicine(){
      
      this.SaveShowBtn();
      this.http.post<any>("http://localhost:8899/MedicineList/medicines",this.form.value)
      .subscribe(res=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Medicine Added Successfully!!!',
          showConfirmButton: false,
          timer:10000,
          width: '700px'
        });
     window.setTimeout(function(){   } ,10000);
     location.reload();
        this.router.navigate(['adminpage'])
     
       
       
      },err=>{
        alert("Something went wrong")
      })
    

}



DeleteMedicine(row :any){
 
  this.service.DeleteUserDetails(row.medicineId).subscribe();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Medicine Deleted Successfully!!!',
    showConfirmButton: false,
    timer:10000,
    width: '700px'
  }); window.setTimeout(function(){   } ,1000000000);
    location.reload();
       this.router.navigate(['adminpage'])
   
  }

UpdateMedicine(row :any){

console.log(row.seller)
this.form.controls['seller'].setValue(row.seller);
this.form.controls['description'].setValue(row.description);
this.form.controls['expdate'].setValue(row.expdate);
this.form.controls['manufactureDate'].setValue(row.manufactureDate);
this.form.controls['medicineName'].setValue(row.medicineName);
this.form.controls['price'].setValue(row.price);
this.form.controls['seller'].setValue(row.seller);
this.form.controls['status'].setValue(row.status);
this.form.controls['stock'].setValue(row.stock)
this.form.controls['type'].setValue(row.type);

this.medicineObj.medicineId=row.medicineId
this.medicineId=row.medicineId
this.UpdateShowBtn();

}
//This will save the details input by user of medicine
UpdateUserDetails(){

     console.log(this.medicineId)

  if(this.form.value.medicineName&&this.form.value.description&&this.form.value.price&&this.form.value.seller){
  this.medicineObj.medicineName=this.form.value.medicineName
  this.medicineObj.description=this.form.value.description
  this.medicineObj.manufactureDate=this.form.value.manufactureDate
  this.medicineObj.medicineId=this.form.value.medicineId
  this.medicineObj.price=this.form.value.price
  this.medicineObj.seller=this.form.value.seller
  this.medicineObj.expdate=this.form.value.expdate
  this.medicineObj.status=this.form.value.status
  this.medicineObj.type=this.form.value.type
  this.medicineObj.stock=this.form.value.stock
 this.service.UpdateUserDetailing(this.medicineObj,this.medicineId).subscribe(res=>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Medicine Updated Successfully!!!',
    showConfirmButton: false,
    timer:10000,
    width: '700px'
  });
  window.location.reload();
 })}
 else{
  alert("Please fill all entries...")
 }
 
}
logout() {
  sessionStorage.removeItem('authenticaterUser');
  this.router.navigate(['user']);
 
}

UpdateShowBtn()
  {
   
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
  
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }
}
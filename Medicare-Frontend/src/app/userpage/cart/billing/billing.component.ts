import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/models/cart.model';
import { Router,ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/services/medicines.service';
import { medicines } from 'src/app/models/medicines.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  carts:cart[]|undefined;
  Medicine! : medicines;

  constructor(
    private activatedRoute: ActivatedRoute,private route:Router,private medicineService : MedicineService) { }

  ngOnInit(): void {
    const medicineId:number = this.activatedRoute.snapshot.params['medicineId'];
    this.medicineService.getMedicine(medicineId).subscribe((res)=>{this.Medicine=res})
    
  }

  back(){
   // this.router.navigate(['/userpage'], {relativeTo: this.route});
    return this.route.navigate(['/userpage'], { relativeTo: this.activatedRoute});
  }
  onSubmit(form: NgForm){
   // alert(" Your Order Placed Successfully, You Will Receive Your Order In 2 to 3 Working Days, Happy shopping !!")
    Swal.fire('Your Order Placed Successfully, You Will Receive Your Order In 2 to 3 Working Days, Happy shopping !!');
    return this.route.navigate(['/userpage'], { relativeTo: this.activatedRoute});
  }
}

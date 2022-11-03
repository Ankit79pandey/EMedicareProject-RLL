import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicines.service';
import { ActivatedRoute, Router } from '@angular/router';
import { medicines } from '../models/medicines.model';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  medicines!: medicines[];
  count:number=0;
  id:number=0;
  constructor(private medicineService:MedicineService,private router: Router,
    private route: ActivatedRoute, private cartService : CartService) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe((med)=>{
      this.medicines = med;;
    })
  }
 /* payment(){
    alert('Your Order Placed Succesfully') ;
    this.router.navigate(['/billing'], {relativeTo: this.route});
  } */

  AddToCart(row:any){

      this.count=this.count+1;
    
    }
    
    
  addCart(medicineId:number){
    Swal.fire('Item added To Cart');
    let username=sessionStorage.getItem(`username`)
    //alert('Iteam added To Cart');
    this.cartService.addCart(username,medicineId).subscribe();
    this.router.navigate(['/userpage'], {relativeTo: this.route});
  }


  back(){
    return location.reload();
   }
   searchText = '';
}

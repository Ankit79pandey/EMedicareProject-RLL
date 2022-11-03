import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

carts:cart[]|undefined;
 

  constructor(private cartService: CartService,
   private router: Router,
   private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    let username=sessionStorage.getItem(`username`)
    this.cartService.getCart(username).subscribe((cart)=>{
      this.carts = cart;
    })
    
  }
  delete(cartId:number){
    console.log(cartId)
    this.cartService.deleteCart(cartId).subscribe();

  }

  deleteCart(cartId: number){
    console.log(cartId)
    //Swal.fire('Item Will be Removed From Cart !!');
    // alert('Item Will be Removed From Cart !!') ;
    this.cartService.deleteCart(cartId).subscribe();
    //this.getCart();
    return location.reload();

  }
  getCart() {
    let username=sessionStorage.getItem(`username`)
    this.cartService.getCart(username);
  }

  payment(){
    Swal.fire('Your Order Placed Succesfully');
    // alert('Your Order Placed Succesfully') ;
    this.router.navigate(['/billing'], {relativeTo: this.route});
  }
  back(){
   
    this.router.navigate(['/userpage'], {relativeTo: this.route});
  }

  
  searchText = '';
}

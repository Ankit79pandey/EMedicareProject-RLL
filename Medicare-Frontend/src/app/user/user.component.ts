import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationStatus } from '../models/authenticationstatus.model';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private userservice:UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
 
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);

    this.userservice
    .authenticate(form.value.username, form.value.password)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        //alert("Successfully logged in!")
        sessionStorage.setItem("username",form.value.username);
        Swal.fire('Log-In Suceessful !!');
        this.router.navigate(['/userpage'], {relativeTo: this.route});

      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Credentials - Try Again',
        })
        //alert("Invalid Credentials!")
        this.router.navigate(['/user'], { relativeTo: this.route});
        form.reset();
}
});
}
}

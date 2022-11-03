import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminAuthenticationStatus } from '../models/adminauthenticationstatus.model';

import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminauthentication : AdminAuthenticationStatus |undefined;
  constructor(
  private adminService: AdminService,
  private router: Router,
  private route: ActivatedRoute
  ){}
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);

    this.adminService
    .authenticate(form.value.username, form.value.password)
    .subscribe((res) => {
      this.adminauthentication = res;
      if (this.adminauthentication.adminAuthenticated) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'LoggedIn Successfully!!!',
          showConfirmButton: false,
          timer:1000,
          width: '700px'
        });
        this.router.navigate(['/adminpage'], { relativeTo: this.route});
      }
      else {
        //alert("Invalid Credentials")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Credentials - Try Again',
        })
        //this.router.navigate(['/adminpage'], { relativeTo: this.route});
        this.router.navigate(['/admin'], {relativeTo: this.route});
        form.reset();
}
});
}
} 
  

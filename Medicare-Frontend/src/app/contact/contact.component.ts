import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import {FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact!: Contact;

  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {formGroup : FormGroup;
  }

  onSubmit(form: NgForm){
    this.contactservice.contactus(form.value.name,form.value.emailId,form.value.contactNo,form.value.description).subscribe((reg)  => {
      this.contact = reg;
      Swal.fire('Your Queries Are Submitted')
      //alert("Your Queries are Submitted")
      //return location.reload();
    })
    
  }
}

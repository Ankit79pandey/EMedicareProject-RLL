import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewcontactus',
  templateUrl: './viewcontactus.component.html',
  styleUrls: ['./viewcontactus.component.css']
})
export class ViewcontactusComponent implements OnInit {
  contacts: Contact[] | undefined;
  constructor(private contactService : ContactService,  private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.contactService.viewAll().subscribe((contacts)=>{
  this.contacts = contacts;
  })
}
}


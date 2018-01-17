import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from '../shared/models/contact.interface'; 
import { ContactService } from '../shared/services/contact.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  errors:string;
  isRequesting:boolean;
  submitted:boolean=false;
  con:FormGroup;
  constructor(private contactService :ContactService, private router:Router) { }

  ngOnInit() {
  }

  add({ value, valid }: { value: IContact, valid: boolean })
  {
    
    this.submitted = true;
    this.isRequesting=true;
    this.errors='';
    if(valid)
      {
          this.contactService.addContact(value)
          .finally(() => this.isRequesting = false)
          .subscribe(
              result => { if(result) {
                  this.router.navigate['/contact']
                  this.con.reset();
              } },
                errors => this.errors =errors);

      }

  }  


}

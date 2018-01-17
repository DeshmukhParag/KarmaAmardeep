import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../shared/models/user.registration.interface';
import { Sponsor } from '../../shared/models/sponsor';

import { UserService } from '../../shared/services/user.service';
import { Modal } from 'angular2-modal';

@Component({
  selector: 'app-sponsor-registration',
  templateUrl: './sponsor-registration.component.html',
  styleUrls: ['./sponsor-registration.component.css']
})
export class SponsorRegistrationComponent implements OnInit {

  errors: string;  
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  } 


  registerSponsor({ value, valid }: { value:Sponsor, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid)
    {
        this.userService.sposnorRegistration(value)
                  .finally(() => this.isRequesting = false)
                  .subscribe(
                    result  => {if(result){
                        this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
                    }},
                    errors =>  this.errors = errors 
                   
                  );
    }      
 }  

}

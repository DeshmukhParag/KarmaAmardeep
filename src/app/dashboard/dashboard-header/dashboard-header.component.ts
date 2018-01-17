import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HomeDetails } from '../models/home.details.interface';
import { DashboardService } from '../services/dashboard.service';
import { ContactService } from '../../shared/services/contact.service';
import { IContact } from '../../shared/models/contact.interface';
import { NavbarService } from '../services/navbar.service';
import { RoleGuard } from '../../role.guard';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit { 

  homeDetails: HomeDetails;
  rolestatus:boolean;
  rolesponsor:boolean;
  roleSponsors:boolean;
  roleRepresentative:boolean;
  roleRepresentatives:boolean;
  roleAdmin:boolean;
  rolehome:string;
  contacts = [];
  errorMsg: string; 
 

  constructor(private dashboardService: DashboardService,private user:UserService) { 

    // this.refresh();
    this.rolehome = localStorage.getItem('roleName');
  
    if(this.rolehome == 'Admin')
    { // console.log('show' + this.nav.show());
      //     this.nav.show();
      this.rolestatus=true;
    
    }  
    if(this.rolehome == 'Sponsor'|| this.rolehome == 'Admin')
    {
      this.rolesponsor = true;      
    } 
    

    if(this.rolehome == 'Sponsor')
    {
      this.roleSponsors = true; 
     
    } 
    if(this.rolehome == 'Representative' ||this.rolehome == 'Admin')
    {
      //console.log("hello");
      this.roleRepresentative = true;
    }

    if(this.rolehome == 'Representative' )
    {
        this.roleRepresentatives=true
    }

// if(this.user.isRepresentative)
// {
//     this.rolestatus = this.user.isRepresentative();
//     console.log('rolestatushome'+ this.rolestatus);
//      this.nav.show();
//      this.nav.doSomethingElseUseful();
// }
  }

  ngOnInit() {
    // if(this.user.isRepresentative())
    // { 
    //         this.nav.show();
    // }
    
    this.dashboardService.getHomeDetails()
    .subscribe((homeDetails: HomeDetails) => {
      this.homeDetails = homeDetails;
    },
    error => {
      //this.notificationService.printErrorMessage(error);
      });
 

  } 


  refresh() { 
    this.dashboardService.getContactData()
        .subscribe(resContactData => this.contacts = resContactData,
        resContactError => this.errorMsg = resContactError);
    // console.log(this.ContactRecord[0], this.ContactRecord[1]);
}


}

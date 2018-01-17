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
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css',
  
    
  ]
})



export class RootComponent implements OnInit {

  homeDetails: HomeDetails;
  // rolestatus:boolean;
  // rolesponsor:boolean;
  // roleSponsors:boolean;
  // roleRepresentative:boolean;
  // roleRepresentatives:boolean;
  // roleAdmin:boolean;
  
  contacts = [];
  errorMsg: string;
  UserName:string;
  UserFullName:string;

  Role:string;
  Representative:boolean;
  Sponsor:boolean;
  Admin:boolean;

  

  constructor( private dashboardService: DashboardService,private userService:UserService) { 
    
    //Get Current Login User UserName
    this.UserName = localStorage.getItem('userName'); 
    this.UserFullName = localStorage.getItem('FullName');

    
    //Get Current Login User Role
    this.Role = localStorage.getItem('roleName'); 
      
    //For Admin Nav bar Tabs
    if(this.Role == 'Admin')
    { 
      this.Admin=true;     
    } 

    //For Sponsor Nav bar Tabs
    if(this.Role == 'Sponsor')
    { 
      this.Sponsor = true;     
    }  

    //For Representative Nav bar Tabs
    if(this.Role == 'Representative')
    {
      this.Representative = true;
    } 


  }

  ngOnInit() {
    this.dashboardService.getHomeDetails()
    .subscribe((homeDetails: HomeDetails) => {
      this.homeDetails = homeDetails;
    },
    error => {
      //this.notificationService.printErrorMessage(error);
      });
  } 

  logout() {
    this.userService.logout();       
   // window.location.reload();
 }

}

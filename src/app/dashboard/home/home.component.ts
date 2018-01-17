import { Component, OnInit } from '@angular/core';
import {  DashboardService } from '../services/dashboard.service';

import { HomeDetails } from '../models/home.details.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit { 

  Role :string; 
  Representative:boolean;
  Sponsor:boolean;
  Admin:boolean;
  figures:HomeDetails;
  errorMsg:string;
  currentCount ="Not Found"

  constructor(private dashboardService:DashboardService ) {

    // Get Current login user Role
    this.Role = localStorage.getItem('roleName'); 

    if(this.Role == 'Admin')
    { 
      this.Admin=true;     
    } 

    if(this.Role == 'Sponsor')
    { 
      this.Sponsor = true;     
    }  

    if(this.Role == 'Representative')
    {
      this.Representative = true;
    }  


    if(this.Role == 'Admin')
    {
      this.dashboardService.getHomeDetails().subscribe(response => this.figures = response,
        responseError => this.errorMsg = responseError) 
    } 

    if(this.Role == 'Representative')
    {
      this.dashboardService.getRepHomeDetails().subscribe(response => this.figures = response,
        responseError => this.errorMsg = responseError) 
    } 

    if(this.Role == 'Sponsor')
    {
      this.dashboardService.getSponsorHomeDetail().subscribe(response => this.figures = response,
      responseError => this.errorMsg = responseError) 
    }
   
   

    //  this.dashboardService.getHomeDetails().subscribe( );


    
    
    
  }

  ngOnInit() {
    
  }
}

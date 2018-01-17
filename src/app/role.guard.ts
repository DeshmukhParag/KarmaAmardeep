// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './shared/services/user.service';
import {NavbarService } from './dashboard/services/navbar.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private user: UserService,private router: Router,public nav:NavbarService) {}

  canActivate() {

    // if(!this.user.isLoggedIn())
    // {
    //    this.router.navigate(['/account/login']);
    //    return false;
    // }  

    // if(!this.user.isRepresentative())
    // { 
    //   //this.nav.hide();
    //   //this.user.logout();
    //    this.router.navigate(['/dashboard/home']);
    //    return false;
    // }

    if(!this.user.isAdministrative())
    {  //this.nav.hide();
      //this.user.logout();
       this.router.navigate(['/dashboard/home']);
       return false;
    }

    return true;
  } 

  
}
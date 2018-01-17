// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './shared/services/user.service';
import {NavbarService } from './dashboard/services/navbar.service';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserService,private router: Router,public nav:NavbarService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.user.isLoggedIn())
    {
      //return tokenNotExpired();
      return true;
    }
    else
    {
       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
       return false;
    }

    // if(!this.user.isLoggedIn())
    // {
    //    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //    return false;
    //   // this.router.navigate(['/login']);
    //   // return false;
    // }  

   

    //return true;
  } 

  
}
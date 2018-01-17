// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Injectable()
export class RepresentativesRoleGuard implements CanActivate {
  constructor(private user: UserService,private router: Router) {}

  canActivate() {
    
    if(!this.user.isRepresentatives())
    {
        this.router.navigate(['/dashboard/home']);
        return false;
    }

    return true;
  } 

  
}
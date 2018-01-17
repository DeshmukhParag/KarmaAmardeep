import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent implements OnInit,OnDestroy {

  status: boolean;
 subscription:Subscription;
value:string;
//value2:string;
UserFullName:string;

  constructor(private userService:UserService) {
    
    //this.value2 = localStorage.getItem('userName');  
    this.UserFullName = localStorage.getItem('FullName');
   }

   logout() {
     this.userService.logout();       
  }

  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  
    //this.value = localStorage.getItem('UserName');
    
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

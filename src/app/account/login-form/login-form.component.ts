import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../shared/models/credentials.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
 
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  returnUrl: string;
  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };
  roleName:any;
  constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard/home';
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.email = param['email'];         
      });      
  }

   ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if (valid) {
      this.userService.login(value.email, value.password)
        .finally(() => this.isRequesting = false)
        .subscribe( 
        result => {         
          if (result) { 
            this.router.navigateByUrl(this.returnUrl); 
            // if(this.returnUrl!=null){
            //   this.router.navigateByUrl(this.returnUrl); 
            // }
            // else{
            //   this.router.navigate(['/dashboard/home']);  
            // }
               
                      
          } 
          // if(result.status === 200){
          //   this.router.navigate(['/dashboard/home'])
          // }
        },
        error => this.errors = error);
    }
  }
}

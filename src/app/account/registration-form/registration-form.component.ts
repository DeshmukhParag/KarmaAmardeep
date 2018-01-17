import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { UserRegistration } from '../../shared/models/user.registration.interface';
// import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
  
})
export class RegistrationFormComponent implements OnInit {

//  errors: string;  
//  isRequesting: boolean;
//  submitted: boolean = false;
//  applicationRoleId:string='405f2c0e-37af-443f-8ade-2682ba8a2746';
//  roleName:string='Admin';
//  private userService: UserService, private router: Router
 constructor()
 { 
   
 }

  ngOnInit() {
          
  }

  // registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
  //    this.submitted = true;
  //    this.isRequesting = true;
  //    this.errors='';
  //    if(valid)
  //    {
  //        this.userService.register(value.email,value.password,value.firstName,value.lastName,value.location,this.applicationRoleId,this.roleName)
  //                  .finally(() => this.isRequesting = false)
  //                  .subscribe(
  //                    result  => {if(result){
  //                        this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
  //                    }},
  //                    errors =>  this.errors = errors);
  //    }      
  // }  
}

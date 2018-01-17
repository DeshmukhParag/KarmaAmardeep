import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';
import { UserService }  from '../shared/services/user.service';
import { EmailValidator } from '../directives/email.validator.directive';
import { routing }  from './account.routing';
import { RegistrationFormComponent }   from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component'; 
import { RepresentativeRegistrationComponent } from './representative-registration/representative-registration.component';
import {RegistrationComponent } from './registration/registration.component';
import { SponsorRegistrationComponent } from './sponsor-registration/sponsor-registration.component';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { AccountFooterComponent } from './account-footer/account-footer.component';
import { SponsorCompanyComponent } from './sponsor-company/sponsor-company.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,routing,SharedModule
  ],
  declarations: [ 
                  RegistrationFormComponent,
                  EmailValidator, 
                  LoginFormComponent,
                  RepresentativeRegistrationComponent,                  
                  SponsorRegistrationComponent, 
                  RegistrationComponent,
                  AccountHeaderComponent ,
                  AccountFooterComponent,
                  SponsorCompanyComponent
                                         
                ],
  providers:    [ UserService ]
})
export class AccountModule {  

  
}

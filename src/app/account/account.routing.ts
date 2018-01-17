import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import {RegistrationComponent } from './registration/registration.component';
import { RegistrationFormComponent }    from './registration-form/registration-form.component';
import { LoginFormComponent }    from './login-form/login-form.component';
import { RepresentativeRegistrationComponent } from './representative-registration/representative-registration.component';
import { SponsorRegistrationComponent } from './sponsor-registration/sponsor-registration.component';
import { SponsorCompanyComponent } from './sponsor-company/sponsor-company.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'register', component: RegistrationFormComponent},
  { path: 'login', component: LoginFormComponent}, 
  { path:'representative-registration',component:RepresentativeRegistrationComponent}, 
  { path:'sponsor-registration',component:SponsorRegistrationComponent},
  { path:'registration',component:RegistrationComponent},
  { path:'sponsor-company',component:SponsorCompanyComponent},
]);

 
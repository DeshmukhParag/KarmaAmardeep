import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SchoolComponent } from './school/school.component';

/* Account Imports */
import { AccountModule } from './account/account.module';
/* Dashboard Imports */
import { DashboardModule } from './dashboard/dashboard.module';
import { ShiningStarsComponent } from './shining-stars/shining-stars.component';
import { ConfigService } from './shared/utils/config.service';
import { ContactComponent } from './contact/contact.component';



//Pipes
import { CityPipe } from './Pipe/student/city.pipe';
import { FirstNamePipe } from './Pipe/student/first-name.pipe';



// import { AddRoleComponent } from './add-role/add-role.component';

import { TestComponent } from './test/test.component';
import { TestPaymentComponent } from './test-payment/test-payment.component';
import { PayuComponent } from './payu/payu.component';
//import { AUTH_PROVIDERS } from 'angular2-jwt';

//Services
import { SchoolService } from './shared/services/school.service';
import { RoleService } from './shared/services/roles.service';
import { ContactService } from './shared/services/contact.service';
import { StudentAppService } from './shared/services/student-app.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { LocalStorageService,StorageService } from './shared/services/storage.service';
import { ShoppingCart } from './shared/models/shopping-cart.model';









@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    HeaderComponent,
    ContactComponent,    
    CityPipe,
    FirstNamePipe,
    ShiningStarsComponent,
    FooterComponent,
    // AddRoleComponent,
    TestComponent,
    TestPaymentComponent,
    PayuComponent,   
    SchoolComponent, ShoppingCartComponent
  ],
  imports: [
    AccountModule,
   
    DashboardModule,
    BrowserModule,   
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService,
    ContactService,
    LocalStorageService,
    {provide:StorageService ,useClass:LocalStorageService},
    { 
      deps:[StorageService,StudentAppService],
      provide:ShoppingCartService,
      useClass:ShoppingCartService
    },
    SchoolService,
    StudentAppService,
    RoleService,
     {
      provide: XHRBackend,
      useClass: AuthenticateXHRBackend
    }, 
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }

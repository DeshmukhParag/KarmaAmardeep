//Angular Classes
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';
import { routing }  from './dashboard.routing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//Components
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { RoleComponent } from './role/role.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { StudentComponent } from './student/student.component';
import { MessageComponent } from './message/message.component';
import { SponsorOrderViewComponent } from './sponsor-order-view/sponsor-order-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MarketComponent } from './market/market.component';

//Representative Tabs
import { RepNotSponsoredComponent } from './Representatives/rep-not-sponsored/rep-not-sponsored.component';
import { RepPendingPaymentComponent } from './Representatives/rep-pending-payment/rep-pending-payment.component';
import { RepSponsoredComponent } from './Representatives/rep-sponsored/rep-sponsored.component';
import { RepFulfiledComponent } from './Representatives/rep-fulfiled/rep-fulfiled.component';

//Admin Tabs
import { NotSponsoredComponent } from './Admin/not-sponsored/not-sponsored.component';
import { PendingPaymentComponent } from './Admin/pending-payment/pending-payment.component';
import { SponsoredComponent } from './Admin/sponsored/sponsored.component';
import { FulfiledComponent } from './Admin/fulfiled/fulfiled.component';
import { RepWaitingComponent } from './Representative/rep-waiting/rep-waiting.component';
import { RepApprovedComponent } from './Representative/rep-approved/rep-approved.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { OrderViewComponent } from './Order/order-view/order-view.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { LampComponent } from './lamp/lamp.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ViewShippingComponent } from './view-shipping/view-shipping.component';
import { LampEditComponent } from './lamp-edit/lamp-edit.component';


//Guards
import { AuthGuard } from '../auth.guard'; 
import { RoleGuard } from '../role.guard';
import {SponsorRoleGuard } from '../sponsor-role.Guard';
import {RepresentativeRoleGuard } from '../representative-role.Guard';
import { SponsorsRoleGuard } from '../sponsors-role-Guard';
import { RepresentativesRoleGuard } from '../representatives-role-Guard';


//Services
import { DashboardService } from './services/dashboard.service';
import { NavbarService } from './services/navbar.service';
import { RoleService } from './services/role.service'; 

import { StudentService } from './services/student.service';
import { RepresentativeService } from './services/representative.service';
import { SponsorService } from './services/sponsor.service'; 
import { OrderService } from './services/order.service';
import { PaymentService  } from './services/payment.service';
import { Sponsor } from '../shared/models/sponsor'; 
import { ShippingService } from './services/shipping.service';


//Payment
import { PayUPaymentComponent } from './Payment/pay-u-payment/pay-u-payment.component';
import { PaymentFailedComponent } from './Payment/payment-failed/payment-failed.component';
import { PaymentRequestComponent } from './Payment/payment-request/payment-request.component';
import { PaymentSuccessfulComponent } from './Payment/payment-successful/payment-successful.component';
import { SponsorPaymentComponent } from './Payment/sponsor-payment/sponsor-payment.component';

import { PayuComponent } from '../payu/payu.component';


@NgModule({
  imports:[
            CommonModule, 
            FormsModule,
            routing,
            SharedModule 
          ],
  declarations:[
                   RootComponent,
                   HomeComponent,                    
                   StudentComponent,                 
                   RoleComponent ,                   
                   RoleViewComponent,
                   DashboardHeaderComponent,
                   DashboardFooterComponent,                                   
                   MessageComponent,
                   SponsorOrderViewComponent,
                   StudentEditComponent,
                  CheckoutComponent,
                  MarketComponent,
                  
                   //Representative
                   RepNotSponsoredComponent,
                   RepPendingPaymentComponent,
                   RepSponsoredComponent,
                   RepFulfiledComponent,

                   //Admin
                   NotSponsoredComponent,
                   PendingPaymentComponent,
                   SponsoredComponent,
                   FulfiledComponent,
                   RepWaitingComponent,
                   RepApprovedComponent,
                   SponsorComponent,
                   OrderViewComponent,
                   SchoolViewComponent,
                   SchoolEditComponent,
                   LampComponent,
                   ShippingComponent,
                   ViewShippingComponent,
                   LampEditComponent,

                   //payment
                   PayUPaymentComponent,
                   PaymentFailedComponent,
                   PaymentRequestComponent,
                   PaymentSuccessfulComponent,
                   SponsorPaymentComponent


                ],
  exports: [ ],
  providers: [ AuthGuard, 
              RoleGuard,
              SponsorRoleGuard,
              RepresentativeRoleGuard,
              SponsorsRoleGuard,
              RepresentativesRoleGuard,
              DashboardService,
              StudentService,
              RoleService,
              PaymentService,
              NavbarService,
              RepresentativeService,
              OrderService ,
              SponsorService,
              ShippingService,
              
             ]
})
export class DashboardModule { }

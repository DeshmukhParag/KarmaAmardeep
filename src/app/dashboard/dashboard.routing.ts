import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

//guards
import { AuthGuard } from '../auth.guard'; 
import { RoleGuard } from '../role.guard';
import {SponsorRoleGuard } from '../sponsor-role.Guard';
import { RepresentativeRoleGuard  } from '../representative-role.Guard';
import { SponsorsRoleGuard } from '../sponsors-role-Guard';
import { RepresentativesRoleGuard } from '../representatives-role-Guard';
import { RootComponent }    from './root/root.component';
import { HomeComponent }    from './home/home.component'; 
import { StudentComponent } from './student/student.component';
import { ShiningStarsComponent } from '../shining-stars/shining-stars.component';

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
import { RoleComponent } from './role/role.component'; 
import { RoleViewComponent } from './role-view/role-view.component';
import { MessageComponent } from './message/message.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { PayUPaymentComponent } from './Payment/pay-u-payment/pay-u-payment.component';
import { PaymentFailedComponent } from './Payment/payment-failed/payment-failed.component';
import { PaymentRequestComponent } from './Payment/payment-request/payment-request.component';
import { PaymentSuccessfulComponent } from './Payment/payment-successful/payment-successful.component';
import { SponsorPaymentComponent } from './Payment/sponsor-payment/sponsor-payment.component';
import { OrderViewComponent } from './Order/order-view/order-view.component';
import { SponsorOrderViewComponent } from './sponsor-order-view/sponsor-order-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolComponent } from '../school/school.component';
import { LampComponent } from './lamp/lamp.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ViewShippingComponent } from './view-shipping/view-shipping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LampEditComponent } from './lamp-edit/lamp-edit.component';
import { MarketComponent } from './market/market.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'dashboard',
      component: RootComponent, canActivate: [AuthGuard],  
      children: [      
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path:'student', component:StudentComponent},     
       { path:'shining-stars',component:ShiningStarsComponent},
       { path:'market',component:MarketComponent},
    
       { path:'sponsor-order-view',component:SponsorOrderViewComponent},
       { path:'student-edit/:studentID',component:StudentEditComponent},

        //Representative
       { path:'rep-not-sponosred',component:RepNotSponsoredComponent,canActivate:[RepresentativeRoleGuard]},
       { path:'rep-pending-payment',component:RepPendingPaymentComponent,canActivate:[RepresentativeRoleGuard]},
       { path:'rep-sponsored',component:RepSponsoredComponent,canActivate:[RepresentativeRoleGuard]},      
       { path:'rep-fulfiled',component:RepFulfiledComponent,canActivate:[RepresentativeRoleGuard]}, 


       //Admin
       { path:'not-sponsor',component:NotSponsoredComponent,canActivate:[RoleGuard]},       
       { path:'sponsored',component:SponsoredComponent,canActivate:[RoleGuard]},
       { path:'pending-payment',component:PendingPaymentComponent,canActivate:[RoleGuard]},
       { path:'fulfiled',component:FulfiledComponent,canActivate:[RoleGuard]},
       { path:'rep-waiting',component:RepWaitingComponent,canActivate:[RoleGuard]},
       { path:'rep-approved',component:RepApprovedComponent,canActivate:[RoleGuard]},
       { path:'role', component: RoleComponent,canActivate:[RoleGuard]},    
       { path:'rolesview',component:RoleViewComponent,canActivate:[RoleGuard]}, 
       { path:'message',component:MessageComponent,canActivate:[RoleGuard]}, 
       { path:'sponsors',component:SponsorComponent,canActivate:[RoleGuard]},
       { path:'order-view',component:OrderViewComponent,canActivate:[RoleGuard]},
       { path:'school-view',component:SchoolViewComponent,canActivate:[RoleGuard]},
       { path:'school-edit/:schoolID',component:SchoolEditComponent,canActivate:[RoleGuard]},
       { path:'lamp',component:LampComponent,canActivate:[RoleGuard]},
       { path:'view-shipping',component:ViewShippingComponent,canActivate:[RoleGuard]},
       { path:'add-shipping',component:ShippingComponent,canActivate:[RoleGuard]},
       { path:'lamp-edit/:id' ,component:LampEditComponent,canActivate:[RoleGuard]},
       

       //Payment
       { path:'payu-payment',component:PayUPaymentComponent},
       { path:'payment-failed',component:PaymentFailedComponent},
       { path:'payment-request',component:PaymentRequestComponent},
       { path:'payment-successfull',component:PaymentSuccessfulComponent},
       { path:'sponsor-payment/:studentID',component:SponsorPaymentComponent},
       { path:'checkout',component:CheckoutComponent},
       
     ]      
  }  
]);


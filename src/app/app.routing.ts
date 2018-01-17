import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SchoolComponent } from './school/school.component';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
// import { AddRoleComponent } from './add-role/add-role.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path:'home',component:HomeComponent},  
  { path:'test',component:TestComponent},  
  // { path:'addRole',component:AddRoleComponent},
  { path:'school',component:SchoolComponent },
 
  // { path:'shining-stars',component:ShiningStarsComponent},
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
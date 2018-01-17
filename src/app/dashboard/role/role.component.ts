import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { IRole } from '../models/role.interface';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit { 
   errors:string;
   isRequesting:boolean;
   submitted:boolean=false;
 
  constructor(private roleService:RoleService,private router:Router ) { }

  ngOnInit() {
  }

  AddRole({ value, valid }: { value: IRole, valid: boolean })
  {
    
      this.submitted=true;
      this.isRequesting=true;
      this.errors='';    
       
      if (valid) {
         this.roleService.addRoleService(value.roleName, value.description)
         .finally(() => this.isRequesting = false)
         .subscribe(
           result => {
           if (result) {
                 this.router.navigate(['/dashboard/home']);
         }
         },
         errors => this.errors = errors);
    }      
    

  }



}

import { Component, OnInit } from '@angular/core';
import { IRole } from '../models/role.interface';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.css']
})
export class RoleViewComponent implements OnInit {

  roles:IRole;
  errorMsg: string; 

  constructor( private roleService:RoleService ) {

      this.roleService.getRoles() 
        .subscribe(resRoles => this.roles = resRoles,
        resError => this.errorMsg = resError);

      
  }

  ngOnInit() {
  }

}

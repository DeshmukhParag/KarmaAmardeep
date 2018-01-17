import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { Lamp } from '../models/lamp';

@Component({
  selector: 'app-lamp-edit',
  templateUrl: './lamp-edit.component.html',
  styleUrls: ['./lamp-edit.component.css']
})
export class LampEditComponent implements OnInit {

  lampID:string;
  lamp:Lamp = new Lamp();

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private dashboardService:DashboardService) {
    
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.lampID = params['id'];
    });

    this.dashboardService.getLamp(this.lampID)
    .subscribe(response =>this.lamp = response )


   }

  ngOnInit() {
  } 

  UpdateLamp({value,valid}:{value:Lamp ,valid:boolean})
  {
    console.log("lamp price");
    console.log(value.price);
    
    this.dashboardService.updateLamp(value)
    .subscribe(
      result => { if(result){
        this.router.navigate(['/dashboard/lamp']);
      }
        
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Lamp } from '../models/lamp';
import { DashboardService} from '../services/dashboard.service';


@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.css']
})
export class LampComponent implements OnInit {

  lamps:Lamp
  detail:Lamp = new Lamp();
  constructor(private dashboardService:DashboardService)
  {
    this.refresh();
  }


  ngOnInit() {
  } 

  add({value,valid}:{value:Lamp,valid})
  {
    //console.log("lamp price");
    this.dashboardService.addLamp(value)
    .subscribe(
      result => {
        this.refresh()
      }
    )
  }  

  UpdateLamp({value,valid}:{value:Lamp ,valid:boolean})
  {
    console.log("lamp price");
    this.dashboardService.updateLamp(value)
    .subscribe(
      result => {
        this.refresh()
      }
    )
  }


  refresh()
  {
    this.dashboardService.getAllLamp()
    .subscribe(response => this.lamps = response);
  }

  

}

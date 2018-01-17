import { Component, OnInit } from '@angular/core';

//services
import { RepresentativeService } from '../../services/representative.service';

//models
import { Representative } from '../../models/Representative';

@Component({
  selector: 'app-rep-approved',
  templateUrl: './rep-approved.component.html',
  styleUrls: ['./rep-approved.component.css']
})
export class RepApprovedComponent implements OnInit { 

  representatives:Representative;
  detail: Representative = new Representative();
  errorMsg:string;

  constructor(private representativeService:RepresentativeService) { 
    this.refresh();
  }

  ngOnInit() {
  } 
  

  refresh()
  {
    this.representativeService.getApprovedRep()
    .subscribe(response => this.representatives = response,
      responseError => this.errorMsg = responseError);
  } 

  getRepDetail(representativeID:string)
  {
    this.representativeService.GetRepresentative(representativeID)
    .subscribe(response => this.detail = response,
    responseError => this.errorMsg = responseError);
  }

}

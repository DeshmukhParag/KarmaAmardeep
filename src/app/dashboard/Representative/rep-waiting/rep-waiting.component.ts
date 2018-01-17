import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { RepresentativeService } from '../../services/representative.service';

//models
import { Representative } from '../../models/Representative';

@Component({
  selector: 'app-rep-waiting',
  templateUrl: './rep-waiting.component.html',
  styleUrls: ['./rep-waiting.component.css']
})
export class RepWaitingComponent implements OnInit {

  representatives:Representative;
  detail: Representative = new Representative();
  errorMsg:string;

  repId:string;
  repName:string;

  constructor(private representativeService:RepresentativeService,private router: Router) {
    this.refresh();

    //get the current RepID from Behaviour Subject
    this.representativeService.getRepId()
    .subscribe(res => this.repId =res);

    //get the current RepName from Behaviour Subject
    this.representativeService.getRepName()
    .subscribe(res => this.repName =res);

   }

  ngOnInit() {
  }


  refresh()
  {
    this.representativeService.getWaitingRep()
    .subscribe(response => this.representatives = response,
      responseError => this.errorMsg = responseError);
  }  


  getRepDetail(representativeID:string)
  {
    this.representativeService.GetRepresentative(representativeID)
    .subscribe(response => this.detail = response,
    responseError => this.errorMsg = responseError);
  }

  approveRepo(representativeID:string)
  {
    this.representativeService.approve(representativeID)
    .subscribe(res => {
      if (res) {
        this.refresh();
        // this.router.navigate(['/dashboard/rep-approved']);
      }
    },
      resError => this.errorMsg = resError);

  }

  deleteRepo()
  {
    this.representativeService.deleteRep(this.repId)
    .subscribe(res => {
      if (res) {
        this.refresh();
      
      }
    },
      resError => this.errorMsg = resError);
  }


  DeletePopUp(ID:string,firstName:string,lastName:string)
  {
    var Name =  firstName + " " + lastName; 
    this.representativeService.updateRepIDandRepName(ID,Name);
  }

}

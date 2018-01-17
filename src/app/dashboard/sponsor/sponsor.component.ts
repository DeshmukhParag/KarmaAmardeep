import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../../shared/models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsors:Sponsor;
  detail: Sponsor = new Sponsor();
  errorMsg:string;

  constructor(private sponsorService:SponsorService) { 
    this.refresh();
  }

  ngOnInit() {
  }

  refresh()
  {
    this.sponsorService.getAllSponsors()
    .subscribe(response => this.sponsors = response,
     responseError => this.errorMsg = responseError);
  } 


  getSponsorDetail(id:string)
  {
    this.sponsorService.GetSponsor(id)
    .subscribe(response => this.detail = response,
    responseError => this.errorMsg = responseError);

  }

}

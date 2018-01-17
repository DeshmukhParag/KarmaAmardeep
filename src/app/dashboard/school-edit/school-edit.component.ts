import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SchoolService } from '../../shared/services/school.service';
import { School } from '../../shared/models/school';
import { SchoolComponent } from '../../school/school.component';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css']
})
export class SchoolEditComponent implements OnInit {

  schoolID: string;
  detail:School =new School();
//detail:School;
  errorMsg:string;
errors:string;

  constructor(private schoolService: SchoolService, private activatedRoute: ActivatedRoute, private router: Router, ) {
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.schoolID = params['schoolID'];
    });
    
    this.schoolService.getSchool(this.schoolID).subscribe(response => this.detail = response,
      responseError => this.errorMsg = responseError); 
  
}

  ngOnInit() {
  } 


  Update({value , valid} : {value :School,valid:boolean})
  { 
    this.schoolService.UpdateSchool(value) 
    .subscribe(
     result  => {if(result){
          this.router.navigate(['/dashboard/school-view']);                         
        }},
     errors =>  this.errors = errors);
  }  





}

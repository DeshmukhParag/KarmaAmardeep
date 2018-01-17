import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../shared/services/school.service';
import { School } from '../shared/models/school';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  errors:string;
  isRequesting:boolean;
  userId:string;
  submitted: boolean = false;
  test:any;


  constructor(private schoolService:SchoolService,private router:Router ) { 
    this.userId = localStorage.getItem('id');
  

    // this.schoolService.updateMessage("karpe");
    // this.schoolService.getMessage().subscribe(response => this.test =response);

    // console.log("Behaviour Subject = " + this.test);
    

    
  } 
  


  ngOnInit() {
  }

  addSchool({value , valid} : {value :School,valid:boolean})
  { 
  
    value.UserId = this.userId;
    this.schoolService.addSchool(value)
    // .finally(() => this.isRequesting = false)
    .subscribe(
     result  => {if(result){
          this.router.navigate(['/representative-registration']);                         
        }},
     errors =>  this.errors = errors);
  }  

  
}
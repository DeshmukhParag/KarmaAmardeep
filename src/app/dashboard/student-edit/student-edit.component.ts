import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentService } from '../services/student.service'; 
import { SchoolService } from '../../shared/services/school.service';
import { School } from '../../shared/models/school';
import { Student } from '../models/student';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  private studentID: string;
  schoolID:string;
  student: Student;
  //  = new Student;
  schools:School;
  isRequesting:boolean;
  submitted:boolean=false;
  errorMsg:string;
  errors:string;
  UserID:string;
  pincode:string;

  
  
  

  constructor(private activatedRoute: ActivatedRoute,private router:Router ,
    private studentService:StudentService,private schoolService:SchoolService)
  {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.studentID = params['studentID'];        

      this.schoolService.getAllSchool().subscribe(
        res => this.schools = res,
        responseError => this.errors = responseError);
     
      this.studentService.GetStudent(this.studentID).subscribe(response => this.student = response,
        responseError => this.errorMsg = responseError); 

        this.UserID = localStorage.getItem('id');

        

  });

  }

  ngOnInit() {
  } 

  // selected school Dowpdown Menu
  onSelect(id)
  {
    this.schoolID = id;
  }


  UpdateStudent({value , valid} : {value :Student,valid:boolean})
  {
    this.submitted = true;
    this.isRequesting = true;
    this.errorMsg='';
    value.schoolID = this.schoolID;
    value.userID = this.UserID;
    if(valid)
    { 
       this.studentService.UpdateStudent(value)        
       .subscribe(
        result  => {if(result){
             this.router.navigate(['/dashboard/not-sponsor']);                         
           }},
        errors =>  this.errorMsg = errors);
    }
  }

}

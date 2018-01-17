import { Component, OnInit } from '@angular/core';
//services
import { StudentService } from '../../services/student.service';
import { ConfigService } from '../../../shared/utils/config.service';

//models
import { StudentStatus } from '../../../shared/models/studentStatus';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-rep-not-sponsored',
  templateUrl: './rep-not-sponsored.component.html',
  styleUrls: ['./rep-not-sponsored.component.css']
})
export class RepNotSponsoredComponent implements OnInit {

  path:string = "";
  studentIDObservable:string;
  Name:string;
  page:number=1;
  pages:number;
  StudentArray:any;

  constructor( private studentService:StudentService,private configService: ConfigService)
   {
    //get count of not sponsor student
    this.studentService.getNotSponsorStudentCount()
    .subscribe(response =>{ this.pages =response,
    this.StudentArray = new Array(this.pages)});

    this.path = configService.getpath();
     this.refresh();

     this.studentService.getStudentID()
     .subscribe(res => this.studentIDObservable =res);
 
     this.studentService.getStudentName()
     .subscribe(res => this.Name =res);
 
   }

  students:Student;
  detail :Student = new Student();
  errorMsg: string;
 // path:string ="http://amardeepwebapi.azurewebsites.net/Photos/";
  

  ngOnInit() {
  } 

  refresh()
  {
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudentsToRepresentative(status,1)
    .subscribe(response => this.students = response,
    responseError => this.errorMsg = responseError);
  }

  studentDetail(studentID:string)
  {
    this.studentService.GetStudent(studentID)   
    .subscribe(response => this.detail = response,
    responseError => this.errorMsg = responseError);
 } 

 delete(studentID:string,firstName:string,lastName:string)
{
  //this method is to show the Delete Confirmation Popup
  //it also send the selected studentId and studentName to Behaviour Subject
  var Name = firstName + " " + lastName;
  this.studentService.updateStudentIDandName(studentID,Name);
}

deleteStudent()
{
   this.studentService.deleteStudent(this.studentIDObservable)
  .subscribe(res => this.refresh()); 
}

  // delete(id:number)
  // {
  //   this.studentService.Delete(id)   
  //   .subscribe(res => this.refresh ,    
  //   resError => this.errorMsg =resError);    
  // }


  //---------------------------------Pagination------------------------//

next()
{
  this.page =this.page + 1;
  var status = StudentStatus.NotSponsored;
  this.studentService.GetStudentsToRepresentative(status,this.page)    
  .subscribe(response => this.students= response,       
    responseError => this.errorMsg = responseError);
}

getStudents(data:number)
{
  data = data + 1;
  this.page =data;
  var status = StudentStatus.NotSponsored;
  this.studentService.GetStudentsToRepresentative(status,data)    
  .subscribe(response => this.students = response,       
    responseError => this.errorMsg = responseError);
} 

previous()
{
  if(this.page > 1)
  {
  this.page = this.page - 1;
  if(this.page > 0)
  { 
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudentsToRepresentative(status,this.page)     
    .subscribe(response => this.students = response,       
      responseError => this.errorMsg = responseError);
  }
  else
  {
    this.refresh();
  }
}
 
}
  

}

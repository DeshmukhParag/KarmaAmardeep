import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../shared/utils/config.service';
//services
import { StudentService } from '../../services/student.service';

//models
import { StudentStatus } from '../../../shared/models/studentStatus';
import { Student } from '../../models/Student';
import { SearchStudent } from '../../models/SearchStudent';



@Component({
  selector: 'app-not-sponsored',
  templateUrl: './not-sponsored.component.html',
  styleUrls: ['./not-sponsored.component.css']
})
export class NotSponsoredComponent implements OnInit {

  path:string = "";
  students: Student;
  detail: Student = new Student();
  errorMsg: string;
  Name:string;
  //path: string = "http://amardeepwebapi.azurewebsites.net/Photos/";
  //path:string ="http://localhost:50295/Photos/";
  studentIDObservable:string;
  page:number=1;
  pages:number;
  StudentArray:any;
  

  constructor(private studentService: StudentService,private configService: ConfigService) {
    
    //get count of not sponsor student
    this.studentService.getNotSponsorStudentCount()
    .subscribe(response =>{ this.pages =response,
    this.StudentArray = new Array(this.pages)});

    //get student Photo Path
    this.path = configService.getpath();

   
   //get first time data
    this.refresh();


    //get current studentID of bahaviour subject
    this.studentService.getStudentID()
    .subscribe(res => this.studentIDObservable =res);


     //get current studentName of bahaviour subject
    this.studentService.getStudentName()
    .subscribe(res => this.Name =res);

  }

  ngOnInit() {

  }

  refresh() {
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudentsToAdmin(status,1)
    .subscribe(response => this.students = response,       
    responseError => this.errorMsg = responseError);
  }

  studentDetail(studentID:string)
  {
    this.studentService.GetStudent(studentID)   
    .subscribe(response => this.detail = response,
    responseError => this.errorMsg = responseError);
 } 

SearchStudent({value , valid} : {value :SearchStudent,valid:boolean})
{
     this.studentService.SearchStudent(value)
    .subscribe(response => this.students = response,       
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

//---------------------------------Pagination------------------------//

next()
  {
    this.page =this.page + 1;
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudentsToAdmin(status,this.page)    
    .subscribe(response => this.students= response,       
      responseError => this.errorMsg = responseError);
  }

  getStudents(data:number)
  {
    data = data + 1;
    this.page =data;
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudentsToAdmin(status,data)    
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
      this.studentService.GetStudentsToAdmin(status,this.page)     
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

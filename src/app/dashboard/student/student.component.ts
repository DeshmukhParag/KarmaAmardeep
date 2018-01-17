import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


//models
import { Student } from '../models/student';

import { School } from '../../shared/models/school'; 
import { IToken } from '../../shared/models/IToken';
import { Guid } from '../models/guild';

//services
import { StudentService } from '../services/student.service';
import { SchoolService } from '../../shared/services/school.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //school
  schools:School;
  schoolID:string;
  errors:string;
  UserId:string;
  isRequesting:boolean;
  submitted:boolean=false;

  //studentPhoto 
  files: FileList; 
   filestring: string; 
   _filename:string[];
   UniqueFileName:any;


  constructor(private studentService:StudentService, private router:Router,
     private schoolService:SchoolService) { 
     this.UserId = localStorage.getItem('id');  
    // this.value3 =localStorage.getItem('UserName');

    //get All School
    this.schoolService.getAllSchool().subscribe(
      res => this.schools = res,
      responseError => this.errors = responseError);
  }

  ngOnInit() { 
  
  }  

// selected school Dowpdown Menu
  onSelect(id)
  {
    this.schoolID = id;
  }

 getFiles(event) { 
    this.files = event.target.files; 
    var reader = new FileReader(); 
    reader.onload = this._handleReaderLoaded.bind(this); 
    reader.readAsBinaryString(this.files[0]); 
}    

_handleReaderLoaded(readerEvt) { 
   var binaryString = readerEvt.target.result; 
   this.filestring = btoa(binaryString);  // Converting binary string data. 
 } 


@ViewChild("fileInput") fileInput;
fileUpload:any;

  addStudent({value , valid} : {value :Student,valid:boolean})
  {
    value.userID = this.UserId;
    value.schoolID = this.schoolID;
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid)
    { 
      let fi = this.fileInput.nativeElement;
      if (fi.files && fi.files[0])
      {
          this.fileUpload = fi.files[0];         
          //Create New Guid
          this.UniqueFileName =  Guid.newGuid();

          //Append Guid and file name    
          // To change the FileName        
          value.photo = this.UniqueFileName + this.fileUpload.name;   

          //store unique file name 
         this.UniqueFileName = value.photo;  
      }

      this.studentService
      .uploadPhoto(this.fileUpload,this.UniqueFileName)
      .subscribe( res => {  res.json()        
      });    
     
        this.studentService.addStudent(value)
               .finally(() => this.isRequesting = false)
               .subscribe(
                result  => {if(result){
                     //alert("Student Added Sucessfully");
                     this.router.navigate(['/dashboard/rep-not-sponosred']); 
                                          
                   }},
                errors =>  this.errors = errors);
    }      


    
  } 
    
}

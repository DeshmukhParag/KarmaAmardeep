import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from '../../shared/models/user.registration.interface';
import { RepresentativeRegistration } from '../../shared/models/representative.registration.interface';

import { UserService } from '../../shared/services/user.service';
import { SchoolService } from '../../shared/services/school.service';
import { School } from  '../../shared/models/school';




@Component({
  selector: 'app-representative-registration',
  templateUrl: './representative-registration.component.html',
  styleUrls: ['./representative-registration.component.css']
})
export class RepresentativeRegistrationComponent implements OnInit {

  schools:School
  schoolID:string;
  errors: string;  
  isRequesting: boolean;
  submitted: boolean = false;
  files: FileList; 
  files2: FileList; 
  files3: FileList; 
  filestring: string; 
  //representativePhoto,
  representativeIdProof:string;
  employmentProof:string; 
  errorMsg:string;
  


  constructor(private userService: UserService, private router: Router ,private schoolService:SchoolService) { 
   
    this.schoolService.getAllSchool().subscribe(
      res => this.schools = res,
      responseError => this.errorMsg = responseError);
     
  } 

  onSelect(id)
  {
    this.schoolID= id;
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

getRepresentativeIdProof(event2) { 
  this.files2 = event2.target.files; 
  var reader2 = new FileReader(); 
  reader2.onload = this._handleReaderLoadedIdProof.bind(this); 
  reader2.readAsBinaryString(this.files2[0]); 
}    

_handleReaderLoadedIdProof(readerEvt2) { 
var binaryString2 = readerEvt2.target.result; 
this.representativeIdProof = btoa(binaryString2);  // Converting binary string data. 
} 

getEmploymentProof(event3) { 
  this.files3 = event3.target.files; 
  var reader3 = new FileReader(); 
  reader3.onload = this._handleReaderLoadedEmploymentProof.bind(this); 
  reader3.readAsBinaryString(this.files3[0]); 
}    

_handleReaderLoadedEmploymentProof(readerEvt3) { 
var binaryString3 = readerEvt3.target.result; 
this.employmentProof = btoa(binaryString3);  // Converting binary string data. 
} 



  ngOnInit() {
  } 

  registerUser({ value, valid }: { value: RepresentativeRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid)
    { value.schoolID = this.schoolID;
      value.representativePhoto = this.filestring;
      value.representativeIdProof =this.representativeIdProof;
      value.employmentProof=this.employmentProof;
      this.userService.representativeRegister(value)      
                  .finally(() => this.isRequesting = false)
                  .subscribe(
                    result  => {if(result){
                        this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
                    }},
                    errors =>  this.errors = errors);
    }      
 }  

}

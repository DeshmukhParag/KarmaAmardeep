import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../shared/services/school.service';
import { School } from '../../shared/models/school';
import { Search } from '../../shared/models/search';
import { Router } from '@angular/router';


@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.css']
})
export class SchoolViewComponent implements OnInit {

  schools:School;
  errorMsg:string;
  page:number=1;
  pages:number;
  fakeArray:any;
  

  constructor( private schoolService:SchoolService ,private router:Router ) 
  {  
    
    this.schoolService.getSchoolCount()
    .subscribe(response =>  {
      this.pages= response,
      this.fakeArray = new Array(this.pages)
    }
  );     
    this.refresh();
  
  }

  //totalPage:number = 4;


// fakeArray = new Array(this. totalPage);


// SearchSchool(searchString:string)
// {
//   this.schoolService.schoolSearch(searchString)
//   .subscribe(response => this.schools= response,       
//   responseError => this.errorMsg = responseError);
// }



  ngOnInit() {
   
     
  } 


    

  refresh()
  {
    // console.log("hello");
    this.schoolService.getAllSchools(1)
    .subscribe(response => this.schools= response,       
      responseError => this.errorMsg = responseError);
  } 

  next()
  {
    this.page =this.page + 1;
    this.schoolService.getAllSchools(this.page)
    .subscribe(response => this.schools= response,       
      responseError => this.errorMsg = responseError);
  }

  getSchools(data:number)
  {
      data = data + 1;
      this.page =data;
    this.schoolService.getAllSchools(data)
    .subscribe(response => this.schools= response,       
      responseError => this.errorMsg = responseError);
  } 

  addSchool({value , valid} : {value :School,valid:boolean})
  { 
  
    this.schoolService.schoolSearch(value.schoolName)  
    .subscribe(response => this.schools= response,       
      responseError => this.errorMsg = responseError);
  }  




  previous()
  {
    if(this.page > 1)
    {
    this.page = this.page - 1;
    if(this.page > 0)
    {
      this.schoolService.getAllSchools(this.page)
      .subscribe(response => this.schools= response,       
        responseError => this.errorMsg = responseError);
    }
    else
    {
      this.refresh();
    }
  }
   
  }
}

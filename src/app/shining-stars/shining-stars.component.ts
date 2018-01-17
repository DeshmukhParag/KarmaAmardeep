import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '../shared/utils/config.service';
import { StudentAppService } from '../shared/services/student-app.service';
import { IStudent } from '../shared/models/student.interface';
import { CityPipe } from '../Pipe/student/city.pipe';
import { FirstNamePipe } from '../Pipe/student/first-name.pipe';
import { Search }from '../shared/models/search';

import { SearchStudent } from '../shared/models/SearchStudent';


import { StudentStatus } from '../shared/models/studentStatus';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-shining-stars',
  templateUrl: './shining-stars.component.html',
  styleUrls: ['./shining-stars.component.css']
})
export class ShiningStarsComponent implements OnInit {

  path:string = "";
  students:IStudent;
  students2:IStudent;
  detail: IStudent;
  errorMsg: string; 
  searchText:Search;
  searchFirstName:Search; 
  page:number=1;
  pages:number;
  StudentArray:any;

  constructor(private studentService: StudentAppService,private configService: ConfigService
               ,private shoppingCartService:ShoppingCartService ) { 

    //get count of not sponsor student
    this.studentService.getNotSponsorStudentCount()
    .subscribe(response =>{ this.pages =response,
    this.StudentArray = new Array(this.pages)});

    this.path = configService.getpath();
  }

  ngOnInit() {
    this.refresh();
    //this.studInCart()
    
  } 

  democart(studentID:string)
  {
    this.studentService.demoCart(studentID)
    .subscribe(res => this.refresh());

    // this.studentService.deleteFromCart(studentID)
    // .subscribe(res => this.refresh());
  }

  public addStudentToCart(student:IStudent):void
  {
    this.shoppingCartService.addItem(student,1);
  } 

  public removeStudentFromCart(student:IStudent):void {
     this.shoppingCartService.addItem(student,-1);
  }

  public studentInCart(student:IStudent):boolean{
    return Observable.create((obs:Observer<boolean>) =>{
      const sub = this.shoppingCartService.get()
      .subscribe((cart) =>{
        obs.next(cart.items.some((i) => i.studentId === student.studentID));
        obs.complete();
      });
      sub.unsubscribe();
    })
  } 

  // studInCart(student:IStudent):boolean
  // {
  //   return Observable.create((obs:Observer<Boolean>) => {
  //       const sub = this.studentService.GetStudentfromCart()
  //       .subscribe(response => {
  //         obs.next(response.studentID === student.studentID)
  //       })
  //   });


     
  //     //   this.studentService.GetStudentfromCart()
  //     // .subscribe(response => this.students = response,       
  //     //   responseError => this.errorMsg = responseError);
    
  // }

  refresh() {
    var status = StudentStatus.NotSponsored;

    this.studentService.GetStudents(status,1)
    .subscribe(response => this.students = response,       
    responseError => this.errorMsg = responseError);

    // this.studentService.GetStudentsByStatus(status)
    //   .subscribe(resStudentData => this.students = resStudentData,
    //   resRepresentativeError => this.errorMsg = resRepresentativeError);
   
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


//-------------------------Paginatin Code--------------------------------//

next()
  {
    this.page =this.page + 1;
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudents(status,this.page)    
    .subscribe(response => this.students= response,       
      responseError => this.errorMsg = responseError);
  }

  getStudents(data:number)
  {
    data = data + 1;
    this.page =data;
    var status = StudentStatus.NotSponsored;
    this.studentService.GetStudents(status,data)    
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
      this.studentService.GetStudents(status,this.page)     
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

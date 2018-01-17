import { Injectable } from '@angular/core';
import { Http , Response, Headers , RequestOptions } from  '@angular/http';

import { ConfigService } from '../utils/config.service';
import {BaseService } from "./base.service"; 
import { IStudent } from '../models/student.interface';
import {Observable } from 'rxjs/Observable';
import { StudentStatus } from '../models/studentStatus';
import {SearchStudent } from '../models/SearchStudent';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';




@Injectable()
export class StudentAppService extends BaseService
{
    baseUrl:string = '';
    myValue:any ={};
    constructor(private http:Http,private configService:ConfigService)
    {
           super(); 
           this.baseUrl=configService.getApiURI(); 
    }  

    getStudents()
    {

        return this.http.get(this.baseUrl + '/Student')
            .map((response:Response) => response.json())             
            .catch(this._handleError); 
    }  

    GetStudentsByStatus(status:StudentStatus)
    {
         //this method is for Admin To View All Students by their Status 
        let body =JSON.stringify({status})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + '/Student/GetStudentsByStatus',body,options)       
        .map((response:Response) => response.json())  
        .catch(this._handleError);
    }  

    GetStudent(studentID:string):Observable<IStudent>
    {
        let body =JSON.stringify({studentID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this.baseUrl + "/Student/GetStudent/" +studentID,options)       
        .map((response:Response) => response.json())      
        //.do(data=>console.log( "student Detail ="+ JSON.stringify(data)))    
        .catch(this.handleError);
    }

    GetStudents(status:StudentStatus,page:number)
    {
         //this method is for Admin To View All Students by their Status 
        let body =JSON.stringify({status,page})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + '/Student/GetStudentsByStatus',body,options)       
        .map((response:Response) => response.json())           
        .catch(this.handleError);
    }


    SearchStudent(model:SearchStudent):Observable<IStudent>
    {
    //    let body =JSON.stringify({schoolName,name,district})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/Student/SearchStudent",model,options)
        .map((response:Response) => response.json())     
        .catch(this.handleError);
    }
  
    getNotSponsorStudentCount()
    {
        return this.http.get(this.baseUrl + '/RepresentativeAccount/GetNotSponsorStudentCount')
        .map((response:Response) => response.json())                 
        .catch(this.handleError); 
    }

    private _handleError(error: Response)
    {
        // console.error(error);
        return Observable.throw(error || 'Server Error');
    } 


    checkStudent(student:any[])
    { 
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post( this.baseUrl +'/Student/CheckStudent',student,options)
        // return this.http.post( 'http://localhost:50295/api/Student/CheckStudent',student,options)
        // .do(data=>console.log( "student cart Detail ="+ JSON.stringify(data)))
        .map(response => response.json())     
        .catch(this.handleError);
    } 

    demoCart(studentID:string)
    {
        var UserID = localStorage.getItem('id');
        let body =JSON.stringify({studentID,UserID});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl +'/Cart',body,options)
        .map(res => true)     
        .catch(this.handleError);
    }  

    deleteFromCart(studentID:string)
    {
        var UserID = localStorage.getItem('id');
        let body =JSON.stringify({studentID,UserID});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post( this.baseUrl +'/Cart/DeleteFromCart',body,options)
        .map(res => true)     
        .catch(this.handleError);
    }

    GetStudentfromCart():Observable<IStudent>
    {
         var UserID = localStorage.getItem('id');
        return this.http.get(this.baseUrl + '/Cart/GetStudentfromCart/'+ UserID)
        // .do(data=>console.log( "check out detail ="+ JSON.stringify(data)))
        .map(response => response.json())     
        .catch(this.handleError);
    }
    
} 








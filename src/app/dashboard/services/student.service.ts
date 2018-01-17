import {Injectable } from '@angular/core';
import {Http ,Response,Headers,RequestOptions } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


//services
import {BaseService } from '../../shared/services/base.service';
import {ConfigService } from '../../shared/utils/config.service';


//models
import { Student } from '../models/student';
import { StudentStatus } from '../../shared/models/studentStatus'; 
import { SearchStudent } from '../models/SearchStudent';
import 'rxjs/add/operator/map';



@Injectable()
export class StudentService extends BaseService
{
    baseUrl:string = '';

    //Behaviour StudentId and StudentName variable
    private studentID = new BehaviorSubject("null");
    private studentName = new BehaviorSubject("student");

    constructor(private http:Http,private configService:ConfigService)
    {
           super(); 
           this.baseUrl=configService.getApiURI(); 
    }  

    getStudentID()
    {
        //this method is to get the current(latest) studentID from Behaviour Subject variable
        return this.studentID.asObservable();
    } 

    getStudentName()
    {
        //this method is to get the current(latest) studentName from Behaviour Subject variable
        return this.studentName.asObservable();
    }

    updateStudentIDandName(studentID:string,studentName:string)
    { 
        //this method is to update the studentID and StudentName of Behavior Subject variable
        this.studentID.next(studentID);
        this.studentName.next(studentName);
    } 


    deleteStudent(StudentID:string)
    { 
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});             
        return this.http.get(this.baseUrl + "/Student/DeleteStudent/"+ StudentID)
        .map(res => true)
        .catch(this.handleError);
    }

    addStudent(model:Student):Observable<Student>
    {
      
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.post(this.baseUrl + "/Student/AddStudent",model,options)
            .map(res => true)
            .catch(this.handleError);
    }  


    uploadPhoto(fileToUpload: any,uniqueFileName:any ) {           
        var formData:FormData =new FormData();
        formData.append("file",fileToUpload,uniqueFileName);
     
         return this.http
          .post(this.baseUrl + '/UploadFile',formData)
          .map((response:Response) =>response.json())          
          .catch(this._handleError);  
     }

    private _handleError(error: Response)
    {
       // console.error(error);
        return Observable.throw(error || 'Server Error');
    }  

    //This method for Representative students
    GetStudentsByUserId(status:StudentStatus)
    { 
        //this method is for Representative to view only their Students
        var UserId = localStorage.getItem('id'); //userId
        let body =JSON.stringify({UserId,status})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + '/Student/GetStudentsByUser',body,options)       
        .map((response:Response) => response.json())          
        // .do(data=>console.log( "students ="+ JSON.stringify(data)))  
        .catch(this._handleError);
    } 

    GetStudentsToRepresentative(status:StudentStatus,page:number)
    { 
        //this method is for Representative to view only their Students
        var UserId = localStorage.getItem('id'); //userId
        let body =JSON.stringify({UserId,status,page})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + '/Student/GetStudentsByUser',body,options)       
        .map((response:Response) => response.json())          
        // .do(data=>console.log( "students ="+ JSON.stringify(data)))  
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

    GetStudentsToAdmin(status:StudentStatus,page:number)
    {
         //this method is for Admin To View All Students by their Status 
        let body =JSON.stringify({status,page})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + '/Student/GetStudentsByStatus',body,options)       
        // .map((response:Response) => response.json()) 
        .map(response => response.json())          
        .catch(this._handleError);
    }

    GetStudent(studentID:string):Observable<Student>
    {
        let body =JSON.stringify({studentID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this.baseUrl + "/Student/GetStudent/" +studentID,options)       
        .map((response:Response) => response.json())      
        //.do(data=>console.log( "student Detail ="+ JSON.stringify(data)))    
        .catch(this.handleError);
    }

    UpdateStatus(studentID:string)
    {
        let body =JSON.stringify({studentID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this.baseUrl + "/Student/UpdateStatus/" +studentID,options)       
        .map((response:Response) => response.json())     
        .catch(this.handleError);
    } 

    AddOrderToShipping(orderDetailID:string,studentID:string,shippingId:string)
    {
        let body = JSON.stringify({orderDetailID,studentID,shippingId})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/OrderDetail/AddOrderToShipping",body,options)
        .map(response => true)
        .catch(this.handleError);
    }

    UpdateStudent(model:Student):Observable<Student>
    {
        //let body =JSON.stringify({studentID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/Student/UpdateStudent",model,options)
        .map(res => true)
        .catch(this.handleError);

    }

    SearchStudent(model:SearchStudent):Observable<Student>
    {
       // let body =JSON.stringify({schoolName,name,district})
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

    getAllShippings()
    {
      return this.http.get(this.baseUrl + '/Shipping')
      .map((response:Response) => response.json())
      .catch(this.handleError);
    }
  
    


   

   
    
} 




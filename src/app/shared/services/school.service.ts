import {Injectable } from '@angular/core';
import {BaseService } from '../../shared/services/base.service';
import {Http ,Response,Headers,RequestOptions } from '@angular/http';
import {ConfigService } from '../../shared/utils/config.service';
import {Observable } from 'rxjs/Observable';
import {School} from '../models/school';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Payment } from '../../dashboard/models/payment';
// import { Subject } from 'rxjs';


@Injectable()
export class SchoolService extends BaseService 
{

    // private _subject= new Subject<Payment>();

    // //_cart =this._subject.asObservable();
    // getMessage()
    // {

    //     this._subject.asObservable();
    // }


    //private bsubject= new BehaviorSubject("a");

    //private cartSubject = new Subject<Payment>();

    // private pay:BehaviorSubject<List<Payment>> = new BehaviorSubject(List([]));
    
    baseUrl:string = '';
    constructor(private http:Http,private configService:ConfigService)
    {
       
           super(); 
           this.baseUrl=configService.getApiURI(); 
    }  

    addSchool(model:School):Observable<School>
    {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/School/AddSchool",model,options)
            .map(res => true)
            .catch(this.handleError);
    } 

    // getMessage(){

    //     this.bsubject.next("deshmukh");
    //     return this.bsubject.asObservable();
        
    //    }

    //    updateMessage(message:string)
    //    {
    //        this.bsubject.next(message);
    //    }
       


    UpdateSchool(model:School):Observable<School>
    {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/School/UpdateSchool", model,options)
        .map(res => true)
        .catch(this.handleError);

    }

    getSchool(schoolID:string)
    {
        return this.http.get(this.baseUrl + '/School/GetSchool/'+ schoolID )
        .map((response:Response) => response.json())
        // .do(data=>console.log( "student Detail ="+ JSON.stringify(data)))   
        .catch(this.handleError);
    }

    getAllSchool():Observable<School>
    {
        return this.http.get(this.baseUrl + '/School')
            .map((response:Response) => response.json())      
            //.do(data=>console.log( "student Detail ="+ JSON.stringify(data)))           
            .catch(this.handleError);      
    }  

    getAllSchools(page:number):Observable<School>
    {
        return this.http.get(this.baseUrl + '/School/GetAllSchool/'+page)
            .map((response:Response) => response.json())                 
            .catch(this.handleError);      
    }  

    getSchoolCount()
    {
        return this.http.get(this.baseUrl + '/RepresentativeAccount/GetSchoolCount')
        .map((response:Response) => response.json())                 
        .catch(this.handleError); 
    }

    schoolSearch(searchString:string)
    {
        return this.http.get(this.baseUrl + '/RepresentativeAccount/SchoolSearch/'+searchString)
        .map((response:Response) => response.json())                 
        .catch(this.handleError); 
    }
}
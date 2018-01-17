import {Injectable } from '@angular/core';
import {Http ,Response,Headers,RequestOptions } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import {BaseService } from '../../shared/services/base.service';

import {Observable } from 'rxjs/Observable';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IApprove } from '../models/approve.interface';
import { OrderStatus  } from '../../shared/models/OrderStatus';
import { Representative } from '../models/Representative';
import { HomeDetails } from '../models/home.details.interface';

@Injectable()
export class RepresentativeService extends BaseService
{
    baseUrl:string = '';

    //Bahavior Subject Variable
    private representativeID = new BehaviorSubject("");
    private representativeName = new BehaviorSubject("");

    constructor(private http:Http,private configService:ConfigService)
    {
           super(); 
           this.baseUrl=configService.getApiURI(); 
    } 

    getRepId()
    {
         //this method is to get the current(latest) RepresentativeID from Behaviour Subject variable
        return this.representativeID.asObservable();
    }

    getRepName()
    {
         //this method is to get the current(latest) RepresentativeName from Behaviour Subject variable
        return this.representativeName.asObservable();
    } 

    updateRepIDandRepName(repId:string,repName:string)
    {
        //this method is to update the RepresentativeID and RepresentativeName of Behavior Subject variable
        this.representativeID.next(repId);
        this.representativeName.next(repName);
    }


    
    getWaitingRep()
    {
        return this.http.get(this.baseUrl + '/Representative/GetWaitingRep')
        .map((response:Response) => response.json())  
        // .do(data=>console.log(JSON.stringify(data)))    
        .catch(this.handleError);
    } 

    getApprovedRep()
    {
        return this.http.get(this.baseUrl + '/Representative/GetApprovedRep')
        .map((response:Response) => response.json())          
        .catch(this.handleError);
    }  

  


    // getRepresentative()
    // {
    //     return this.http.get(this.baseUrl + '/RepresentativeAccount')
    //     .map((response:Response) => response.json())      
    //     .catch(this.handleError);
    // } 

    GetRepresentative(representativeID:string):Observable<Representative>
    {
        let body =JSON.stringify({representativeID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this.baseUrl + "/Representative/GetDetail/" +representativeID,options)       
        .map((response:Response) => response.json())      
        // .do(data=>console.log( "student Detail ="+ JSON.stringify(data)))    
        .catch(this.handleError);
    }


    GetRepresentativeForAddStudent():Observable<Representative>
    {
        return this.http.get(this.baseUrl + '/Representative/GetRepresentativeForAddStudent')
        .map((response:Response) => response.json())          
        .catch(this.handleError);
    }

    approve(userID:string)
    { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.baseUrl + '/RepresentativeAccount/ApproveRep/'+ userID,options)
        .map(res => true)
        .catch(this._handleError);
    }    


    delete(userID:string)
    {
        let body =JSON.stringify({userID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.delete(this.baseUrl + "/RepresentativeAccount/DeleteRepo/" + userID,options)
        .map((response:Response) => response.json())        
        .catch(this.handleError);
    } 

    deleteRep(userID:string)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.baseUrl + "/RepresentativeAccount/DeleteRep/"+ userID,options)  
        .map(res => true)
        .catch(this._handleError);
    }
 
    private _handleError (error: Response | any) {
        //console.error(error.message || error);
        return Observable.throw(error.status);
    } 


    

    
    // GetRepNotSponsoredStudent(status:OrderStatus)
    // {
    //     var Id = localStorage.getItem('id');
    //     let body =JSON.stringify({Id,status})
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers:headers});
    //     return this.http.post(this.baseUrl + '/Representative/GetRepNotSponsoredStudent',body,options)
        
    //     .map((response:Response) => response.json())          
    //     .catch(this._handleError);
    // }
      

    // GetOrder(Id:string ,status:OrderStatus)
    // {
    //     let body =JSON.stringify({Id,status})
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers:headers});
    //     return this.http.post(this.baseUrl + '/Orders/GetOrder',body,options) 
    //    // .do(data=>console.log(JSON.stringify(data)))       
    //     .map((response:Response) => response.json())          
    //     .catch(this.handleError);
    // }
    
}




import {Injectable } from '@angular/core';
import {Http ,Response,Headers,RequestOptions } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
// import { IOrder } from '../models/Order.interface';
import {BaseService } from '../../shared/services/base.service';
import { Sponsor } from '../../shared/models/sponsor';

import {Observable } from 'rxjs/Observable';
import { CurrentCount } from '../models/current.count';

@Injectable()
export class SponsorService extends BaseService
{
    baseUrl:string = '';
    constructor(private http:Http,private configService:ConfigService)
    {
           super(); 
           this.baseUrl=configService.getApiURI(); 
    }  
  
    // get(UserID:string)
    // {
    //     return this.http.get(this.baseUrl + '/Sponsor/GetSponsorOrder/'+ UserID)
    //         .map((response:Response) => response.json())          
    //         .catch(this.handleError);      
    // }  


    GetOrderTotalAmount(): Observable<CurrentCount>
    {
        var UserID = localStorage.getItem('id');
        return this.http.get(this.baseUrl + '/RepresentativeAccount/GetOrderTotalAmount/'+ UserID)
        .map((response:Response) => response.json())        
        .catch(this.handleError);   
    }

    getAllSponsors()
    {
        return this.http.get(this.baseUrl + '/Sponsor')
        .map((response:Response) => response.json())         
        .catch(this.handleError);  
    }

    GetSponsor(sponsorID:string):Observable<Sponsor>
    {
        let body =JSON.stringify({sponsorID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this.baseUrl + "/Sponsor/GetDetail/" +sponsorID,options)       
        .map((response:Response) => response.json())  
        .catch(this.handleError);
    }

}

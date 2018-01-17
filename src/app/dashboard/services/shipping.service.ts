import {Injectable } from '@angular/core';
import {Http ,Response,Headers,RequestOptions } from '@angular/http';

//services
import {BaseService } from '../../shared/services/base.service';
import {ConfigService } from '../../shared/utils/config.service';

//models
import { Shipping } from '../models/shipping';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShippingService extends BaseService
{
    baseUrl:string = '';

    constructor(private http:Http,private configService:ConfigService)
    {
           super(); 
           this.baseUrl=configService.getApiURI(); 
    }  


    addShipping(model:Shipping):Observable<Shipping>
    {
      
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.post(this.baseUrl + "/Shipping/AddShipping",model,options)
        .map(res => true)
        .catch(this.handleError);
    }   

    updateShipping(model:Shipping):Observable<Shipping>
    {
      
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.post(this.baseUrl + "/Shipping/UpdateShipping",model,options)
            .map(res => true)
            .catch(this.handleError);
    } 


    getAllShipping():Observable<Shipping>
    {
        return this.http.get(this.baseUrl + '/Shipping')
            .map((response:Response) => response.json())      
          //  .do(data=>console.log( "student Detail ="+ JSON.stringify(data)))           
            .catch(this.handleError);      
    }   


    getShipping(shippingID:string)
    {
        return this.http.get(this.baseUrl + '/Shipping/GetShipping/'+ shippingID )
        .map((response:Response) => response.json())
        // .do(data=>console.log( "student Detail ="+ JSON.stringify(data)))   
        .catch(this.handleError);
    }

    deleteShipping(shippingID:string)
    { 
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});             
        return this.http.get(this.baseUrl + "/Shipping/DeleteShipping/"+ shippingID)
        .map(res => true)
        .catch(this.handleError);
    }
}
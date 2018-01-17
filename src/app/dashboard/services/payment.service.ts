import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../../shared/services/base.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Payment } from '../models/payment';


@Injectable()
export class PaymentService extends BaseService
{
    baseUrl:string = '';
    UserName:string;
    UserID:string;
    email:string;

    constructor(private configService:ConfigService,private http:Http)
    {
        super();
        this.baseUrl =configService.getApiURI();
        this.UserName = localStorage.getItem('userName');
        this.UserID =localStorage.getItem('id');
    }  

    addPayment(model:Payment):Observable<Payment>
    {
       // this.email = this.UserName;

        //let body = JSON.stringify({ publicKey,key,hash,url,txnid,firstName,amount,this.email,phone,productInfo,studentID,this.UserID});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/PayUPayment",model,options)
        .map(response => response.json())
        .catch(this.handleError);
    }


}

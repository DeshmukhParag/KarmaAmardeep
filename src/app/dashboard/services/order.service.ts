import {Injectable } from '@angular/core';
import {Http ,Response,Headers,RequestOptions } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import { IOrder } from '../models/Order.interface';

import {BaseService } from '../../shared/services/base.service';
// import {Observable } from 'rxjs/Rx';
// import {BehaviorSubject } from 'rxjs/Rx';
// import '../../rxjs-operators';
import {Observable } from 'rxjs/Observable';
import {Payment } from '../models/payment';
import { OrderDetailListViewModel } from '../models/orderDetailListViewModel';
import { StudentStatus } from '../../shared/models/studentStatus';
import { ListOrder } from '../models/list-order';

@Injectable()
export class OrderService extends BaseService
{
    baseUrl:string = '';
    constructor(private http:Http,private configService:ConfigService)
    {
           super(); 
           this.baseUrl=configService.getApiURI(); 
    }  


    GetOrders()
    {
        return this.http.get(this.baseUrl + '/Order')
        .map((response:Response) => response.json())         
        .catch(this.handleError);
    }

    GetSponsoredOrderDetails()
    {
        return this.http.get(this.baseUrl + '/OrderDetail/GetSponsoredOrderDetails')
        .map((response:Response) => response.json())   
        .do(data=>console.log( "order sponsor Detail ="+ JSON.stringify(data)))         
        .catch(this.handleError);
    } 
    GetFulfiledOrderDetails()
    {
        return this.http.get(this.baseUrl + '/OrderDetail/GetFulfiledOrderDetails')
        .map((response:Response) => response.json())         
        .catch(this.handleError);
    } 
    


    GetOrderById(status:StudentStatus)
    {
        var userID = localStorage.getItem('id');
        let body =JSON.stringify({userID,status});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.baseUrl + "/OrderDetail/GetOrderDetailById" ,body,options)       
        .map((response:Response) => response.json())                    
        .catch(this.handleError);

    }

    GetOrderDetailBySponsorId()
     {
       var userID = localStorage.getItem('id');
    //     let body =JSON.stringify({userID});
    //     // let headers = new Headers({'Content-Type':'application/json'});
    //     // let options = new RequestOptions({headers:headers});
    //     // return this.http.post(this.baseUrl + "/OrderDetail/GetOrderDetailBySponsorId" ,body,options)
    //     return this.http.get(this.baseUrl + "/Order/GetUserOrders/"+ userID);
    //     .map((response:Response) => response.json())    
    //     // .do(data=>console.log( " sponsor order Detail ="+ JSON.stringify(data)))    
    //     .catch(this.handleError); 

    return this.http.get(this.baseUrl + '/Order/GetUserOrders/'+ userID)
    .map((response:Response) => response.json())         
    .catch(this.handleError);
    }
    
    GetOrderDetail(id:string):Observable<OrderDetailListViewModel>
    { 
        return this.http.get(this.baseUrl + '/OrderDetail/GetOrdersDetailByOrderID/'+id)
        .map((response:Response) => response.json())         
        .catch(this.handleError);
    } 

    GetDetail(orderDetailID:string):Observable<OrderDetailListViewModel>
    {
        //let body =JSON.stringify({studentID})
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.put(this.baseUrl + "/OrderDetail/GetOrderDetail/" + orderDetailID,options)  
        // .do(data=>console.log( "order Detail ="+ JSON.stringify(data)))       
        .map((response:Response) => response.json())     
        .catch(this.handleError);
    } 


    private _handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error || 'Server Error');
    }  

    
    // register(StudentID:string,SponsorID:string,RepresentativeID:string,Amount:number):Observable<IOrder>
    // {
    //     let body =JSON.stringify({StudentID,SponsorID,RepresentativeID,Amount})
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers:headers});

    //     return this.http.post(this.baseUrl + "/Orders",body,options)
    //         .map(res => true)
    //         .catch(this.handleError); 
    
    // }  


    // paymentOrder(firstName:string,amount:string,productInfo:string,email:string,phone:string):Observable<Payment>
    // {
    //     let body = JSON.stringify({firstName,amount,productInfo,email,phone});
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers:headers});
    //     return this.http.post(this.baseUrl + "/AuthorizePayment",body,options)
    //     .map(response => response.json())
    //     .catch(this.handleError);
    // }



  

    // get()
    // {
    //     return this.http.get(this.baseUrl + '/Orders')
    //         .map((response:Response) => response.json())         
    //         .catch(this.handleError);      
    // }  
    

    



} 




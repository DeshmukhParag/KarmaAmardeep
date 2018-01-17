import { Component, OnInit } from '@angular/core';

import { SponsorService } from '../services/sponsor.service';
import { OrderService } from '../services/order.service';
import { CurrentCount } from '../models/current.count';
import { OrderDetailListViewModel } from '../models/orderDetailListViewModel';
import { StudentStatus } from '../../shared/models/studentStatus';
import { ListOrder } from '../models/list-order';

@Component({
  selector: 'app-sponsor-order-view',
  templateUrl: './sponsor-order-view.component.html',
  styleUrls: ['./sponsor-order-view.component.css']
})
export class SponsorOrderViewComponent implements OnInit {

 // orders:OrderDetailListViewModel;
 orderdetails:OrderDetailListViewModel;
 orders:ListOrder;
  path:string ="http://amardeepwebapi.azurewebsites.net/Photos/";
  errorMsg: string;
  detail :OrderDetailListViewModel = new OrderDetailListViewModel();  
  amountTotal:CurrentCount;

  constructor( private sponsorService:SponsorService ,private orderService: OrderService)
  {
      this.orderService.GetOrderDetailBySponsorId()
      .subscribe(response => this.orders = response,
        responseError => this.errorMsg = responseError);


       this.sponsorService.GetOrderTotalAmount() 
       .subscribe(response => this.amountTotal = response,
        responseError => this.errorMsg = responseError);

  }

  ngOnInit() {
  }

  getType(id:number):any
  {
    
        return StudentStatus[id];
  }


  OrderDetail(orderID:string)
  { 

   
    this.orderService.GetOrderDetail(orderID)
    .subscribe(res => this.orderdetails = res,
    responseError => this.errorMsg = responseError);
  }



}

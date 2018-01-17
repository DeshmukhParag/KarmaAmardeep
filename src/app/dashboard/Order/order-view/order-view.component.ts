import { Component, OnInit } from '@angular/core';
import { OrderDetailListViewModel } from '../../models/orderDetailListViewModel';
import { StudentStatus } from '../../../shared/models/studentStatus';
import { ConfigService } from '../../../shared/utils/config.service';
import { OrderService } from '../../services/order.service';
import { ListOrder } from '../../models/list-order';



@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  orderdetails:OrderDetailListViewModel;
  errorMsg:string; 
  // detail :OrderDetailListViewModel= new OrderDetailListViewModel;

  orders:ListOrder;
 

  constructor(private orderService:OrderService) {
   
    this.refresh();
    
   }

  ngOnInit() {

  } 


  

  refresh()
  {
    this.orderService.GetOrders()
    .subscribe(response => this.orders = response,       
    responseError => this.errorMsg = responseError);
  }

  OrderDetail(orderID:string)
  { 

   
    this.orderService.GetOrderDetail(orderID)
    .subscribe(res => this.orderdetails = res,
    responseError => this.errorMsg = responseError);
  }

  getType(id:number):any
  {
    
        return StudentStatus[id];
  }


}

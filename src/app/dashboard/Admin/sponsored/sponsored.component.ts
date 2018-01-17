import { Component, OnInit } from '@angular/core';
//services
import { StudentService } from '../../services/student.service';
import { OrderService } from '../../services/order.service';
import { ConfigService } from '../../../shared/utils/config.service';

//models
import { StudentStatus } from '../../../shared/models/studentStatus';
// import { Student } from '../../models/Student';
import { OrderDetailListViewModel} from '../../models/orderDetailListViewModel';
import { Shipping } from '../../models/shipping';
import { OrderShipping } from '../../models/order-shipping';


@Component({
  selector: 'app-sponsored',
  templateUrl: './sponsored.component.html',
  styleUrls: ['./sponsored.component.css']
})
export class SponsoredComponent implements OnInit {

  path:string = "";
  orders : OrderDetailListViewModel;
  errorMsg: string;
  shippingId:string;
  message:string;
  shippings:Shipping;
  //path: string = "http://amardeepwebapi.azurewebsites.net/Photos/";
  detail :OrderDetailListViewModel= new OrderDetailListViewModel;

  constructor(private orderService:OrderService,private studentService:StudentService,private configService: ConfigService) {
    this.path = configService.getpath();
    this.getAllShippings();
    this.refresh();
  }

  ngOnInit() {
  }

  refresh()
  {
    this.orderService.GetSponsoredOrderDetails()
    .subscribe(response => this.orders = response,
    responseError => this.errorMsg = responseError);
  }  

  getAllShippings()
  {
    this.studentService.getAllShippings()
    .subscribe(response => this.shippings = response,
    responseError => this.errorMsg =responseError);
  }

  // selected school Dowpdown Menu
  onSelect(id)
  {
    this.shippingId = id;
  } 

  AddStudentToShipping(Id:string,studentID:string)
  {
  
    this.studentService.AddOrderToShipping(Id,studentID,this.shippingId)
    .subscribe(response => {this.refresh();});

  }

  UpdateStudentStatus(studentID:string)
  {
    this.studentService.UpdateStatus(studentID)
    .subscribe(response => this.message = response,
    responseError => this.errorMsg = responseError);

  }

  studentDetail(orderID)
  {
    this.orderService.GetDetail(orderID)
    .subscribe(res => this.detail = res,
      responseError => this.errorMsg = responseError);
  }

}

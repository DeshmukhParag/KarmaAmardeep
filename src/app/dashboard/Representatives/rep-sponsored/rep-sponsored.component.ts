import { Component, OnInit } from '@angular/core';

//services
import { StudentService } from '../../services/student.service';
import { OrderService } from '../../services/order.service';
import { ConfigService } from '../../../shared/utils/config.service';

//models
import { StudentStatus } from '../../../shared/models/studentStatus';
import { Student } from '../../models/Student';
import { OrderDetailListViewModel } from '../../models/orderDetailListViewModel';

@Component({
  selector: 'app-rep-sponsored',
  templateUrl: './rep-sponsored.component.html',
  styleUrls: ['./rep-sponsored.component.css']
})
export class RepSponsoredComponent implements OnInit {

  path:string = "";
  orders:OrderDetailListViewModel;
  
    students:Student;
    errorMsg: string;
    detail :OrderDetailListViewModel = new OrderDetailListViewModel();

  constructor(private studentService:StudentService,private orderService:OrderService,private configService: ConfigService) {
    this.path = configService.getpath();
    this.refresh();
  }

  ngOnInit() {
  }

  refresh()
  {
    var status = StudentStatus.Sponsored;  
    this.orderService.GetOrderById(status)
    .subscribe(response => this.orders = response,
    responseError => this.errorMsg = responseError);
  }

  studentDetail(orderDetailID:string)
 {
   this.orderService.GetOrderDetail(orderDetailID)
    .subscribe(response => this.detail = response,
    responseError => this.errorMsg = responseError);
  } 



}

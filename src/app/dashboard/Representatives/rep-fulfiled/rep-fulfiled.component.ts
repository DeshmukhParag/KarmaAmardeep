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
  selector: 'app-rep-fulfiled',
  templateUrl: './rep-fulfiled.component.html',
  styleUrls: ['./rep-fulfiled.component.css']
})
export class RepFulfiledComponent implements OnInit {

  path:string = "";
  orders:OrderDetailListViewModel;
  
    students:Student;
    errorMsg: string;
    detail :OrderDetailListViewModel = new OrderDetailListViewModel();
  //path:string ="http://amardeepwebapi.azurewebsites.net/Photos/";

  constructor(private studentService:StudentService,private orderService:OrderService,private configService: ConfigService) 
  {
    this.path = configService.getpath();
    this.refresh();
  }

  ngOnInit() {
  }

  refresh()
  {
    var status = StudentStatus.FulFilled;  
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

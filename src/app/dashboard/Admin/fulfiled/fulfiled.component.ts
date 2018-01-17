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
  selector: 'app-fulfiled',
  templateUrl: './fulfiled.component.html',
  styleUrls: ['./fulfiled.component.css']
})
export class FulfiledComponent implements OnInit {

  path:string = "";
  students:Student;
  orders:OrderDetailListViewModel;
  detail :OrderDetailListViewModel= new OrderDetailListViewModel;
  errorMsg: string;
  //path:string ="http://amardeepwebapi.azurewebsites.net/Photos/";
  
  constructor(private studentService:StudentService,  private orderService:OrderService,private configService: ConfigService)
   {
    this.path = configService.getpath();
     this.refresh();
    }

  ngOnInit() {
  }
  refresh()
  {
    this.orderService.GetFulfiledOrderDetails()
    .subscribe(response => this.orders = response,
    responseError => this.errorMsg = responseError);

    // var status = StudentStatus.FulFilled;
    // this.studentService.GetStudentsByStatus(status)
    // .subscribe(response => this.students = response,
    // responseError => this.errorMsg = responseError);
  }

  studentDetail(orderID)
  {
    this.orderService.GetDetail(orderID)
    .subscribe(res => this.detail = res,
      responseError => this.errorMsg = responseError);
  }

}

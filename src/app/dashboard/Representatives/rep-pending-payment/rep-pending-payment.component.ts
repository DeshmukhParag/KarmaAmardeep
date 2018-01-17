import { Component, OnInit } from '@angular/core';


// import { StudentService } from '../../services/student.service';


// import { StudentStatus } from '../../../shared/models/studentStatus';
// import { Student } from '../../models/Student';

@Component({
  selector: 'app-rep-pending-payment',
  templateUrl: './rep-pending-payment.component.html',
  styleUrls: ['./rep-pending-payment.component.css']
})
export class RepPendingPaymentComponent implements OnInit {

  // students: Student;
  // errorMsg: string;
  // detail: Student = new Student();
  // path: string = "http://amardeepwebapi.azurewebsites.net/Photos/";
  // private studentService: StudentService

  constructor() {
    this.refresh();
  }

  ngOnInit() {
  }

  refresh() {
    // var status = StudentStatus.PendingPayment;
    // this.studentService.GetStudentsByUserId(status)
    //   .subscribe(response => this.students = response,
    //   responseError => this.errorMsg = responseError);
  }

  


}

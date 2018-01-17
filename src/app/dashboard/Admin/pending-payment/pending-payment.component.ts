import { Component, OnInit } from '@angular/core';

// import { StudentService } from '../../services/student.service';


// import { StudentStatus } from '../../../shared/models/studentStatus';
// import { Student } from '../../models/Student';

@Component({
  selector: 'app-pending-payment',
  templateUrl: './pending-payment.component.html',
  styleUrls: ['./pending-payment.component.css']
})
export class PendingPaymentComponent implements OnInit {

  // students: Student;
  // detail: Student = new Student();
  // errorMsg: string;
  // path: string = "http://amardeepwebapi.azurewebsites.net/Photos/";

  // private studentService: StudentService
  constructor() {
    this.refresh();
  }

  ngOnInit() {
  }


  refresh() {
    // var status = StudentStatus.PendingPayment;
    // this.studentService.GetStudentsByStatus(status)
    //   .subscribe(response => this.students = response,
    //   responseError => this.errorMsg = responseError);
  }
}

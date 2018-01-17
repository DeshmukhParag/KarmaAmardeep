import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// //model
import { Student } from '../../models/student';
import { Payment } from '../../models/payment';

// //service
 import { StudentService } from '../../services/student.service';
 import { PaymentService } from '../../services/payment.service';
 import { ConfigService } from '../../../shared/utils/config.service';



@Component({
  selector: 'app-sponsor-payment',
  templateUrl: './sponsor-payment.component.html',
  styleUrls: ['./sponsor-payment.component.css']
})
export class SponsorPaymentComponent implements OnInit { 

  path:string = "";
  student:Student;
  studentID:string;
  UserName:string;
  UserID:string;
  isRequesting: boolean;
 // path:string ="http://amardeepwebapi.azurewebsites.net/Photos/";
  private publicKey:string;
  private hash:string;
  private txnid:string;
  errorMsg:string;

  constructor(private activatedRoute: ActivatedRoute,private router:Router,private studentService:StudentService, private paymentService:PaymentService,private configService: ConfigService )
  {
        this.path = configService.getpath();
        this.activatedRoute.params.subscribe((params: Params) => {
        this.studentID = params['studentID'];        
        this.studentService.GetStudent(this.studentID).subscribe(value =>
        this.student = value,
        );
  });
  this.UserName = localStorage.getItem('userName');
  this.UserID =localStorage.getItem('id');
  }

  ngOnInit() {
  }

  AddPayment({value}:{value:Payment})
  { 
      value.email = this.UserName;
      value.userID =this.UserID;  
      value.productInfo ="Lamp";
      this.paymentService.addPayment(value).subscribe(
        response => {
            this.publicKey = response.key,
            this.hash =response.hash,
            this.txnid= response.txnid    
            this.router.navigate(['/dashboard/payment-request'],{queryParams: {hash:this.hash,txnid:this.txnid,firstName:value.firstName,amount:value.amount,studentID:value.studentID}});
            window.location.reload();
           },
            resError => this.errorMsg =resError);
   }
}


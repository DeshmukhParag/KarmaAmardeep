import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/payment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements OnInit {


  payment:Payment; 
 publicKey:any="h6W4LmfH";
 // publicKey:any="rVYkCjwC"

  rVYkCjwC
  hash:any;
  txnid:any;
  firstName:string;
  amount:string;
  UserName:string;
  UserId:string;
  studentID:String;

  constructor( private router: Router,private activatedRoute: ActivatedRoute) { 
    this.UserName = localStorage.getItem('userName'); 
    this.UserId = localStorage.getItem('id'); 

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (param: any) => {          
         // this.publicKey = param['publicKey'];  
          this.hash = param['hash'];
          this.txnid = param['txnid'];  
          this.firstName =param['firstName'];
          this.amount =param['amount'];
          this.studentID=param['studentID'];
      }); 
  }

}

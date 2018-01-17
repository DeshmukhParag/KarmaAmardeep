import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../shared/models/cart-item.model';
import { IStudent } from '../../shared/models/student.interface';
import { ShoppingCart } from '../../shared/models/shopping-cart.model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { StudentAppService } from '../../shared/services/student-app.service';
// import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscribable } from 'rxjs/Observable';
import { StudentStatus } from '../../shared/models/studentStatus';
import { ConfigService } from '../../shared/utils/config.service';
import { Payment  } from '../models/payment';
import { PaymentService } from '../services/payment.service';


interface ICartItemWithStudent extends CartItem {
  student: IStudent;
  totalCost: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithStudent[];
  public itemCount: number;
  path: string = "";
  students: IStudent;
  private cartSubscription: Subscription;
  errorMsg: string;
  studentdata: any[];
  stud: string;
  amount: number = 3000;
  total: string;
  UserName:string;
  UserID:string;
  private publicKey:string;
  private hash:string;
  private txnid:string;
  lampPrice:string;
 
  constructor(private studentService: StudentAppService,private paymentService:PaymentService,
    private shoppingCartService: ShoppingCartService, private configService: ConfigService,
    private router:Router
  ) {
    //get student Photo Path
    this.path = configService.getpath();
    this.UserName = localStorage.getItem('userName');
    this.UserID =localStorage.getItem('id');
    this.refresh();
  }


  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  refresh() {
    this.studentService.GetStudentfromCart()
      .subscribe((response) => {
      this.students = response.students,
        this.total = response.total,
        this.lampPrice =response.lampPrice
      });
  }

  DeleteStudentFromCart(studentID:string)
  {
    this.studentService.deleteFromCart(studentID)
    .subscribe(res => this.refresh());
  }


  ngOnInit() {

  } 


  AddPayment({value}:{value:Payment})
  { 
   // this.Payment(value:Payment);
    console.log("PAyment");
      value.email = this.UserName;
      value.userID =this.UserID;  
      value.productInfo ="Lamp";
      value.amount = this.total;
      value.phone = "9021642472";
      value.firstName = "Parag"
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


   Payment(value:Payment)
   {
     console.log("Parag Payment");
    value.email = this.UserName;
    value.userID =this.UserID;  
    value.productInfo ="Lamp";
    value.amount = this.total;
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


  // ngOnInit():void {
  //   console.log("hello parag");
  //   this.cart = this.shoppingCartService.get();
  //   this.cartSubscription = this.cart.subscribe((cart) =>{
  //     this.itemCount = cart.items.map((x) =>x.quantity).reduce((p,n) => p + n,0);

  //     // this.refresh();
  //     // var status = StudentStatus.NotSponsored;
  //     // this.studentService.GetStudents(status,1)
  //     // .subscribe(response => this.students = response); 

  //      this.studentdata = cart.items;


  //     this.checkStudent();

  //   // this.amount = this.students.length;
  //       // this.amount = this.amount * 3000;

  //     //  for(var i=0;i < this.studentdata.length;i++)
  //     //  {
  //     //    this.stud = this.stud + "," + this.studentdata[i];
  //     //  }

  //     this.cartItems = cart.items.map((item) => { 
  //       const student = this.students.find((p) => p.studentID === item.studentId);
  //       return{
  //         ...item,
  //         student,
  //         totalCost:150
  //       }
  //     })




  //     // this.studentService.GetStudents(status,1)    
  //     // .subscribe((res) => {
  //     //   this.students = res;
  //     //   this.cartItems =cart.items.map((item) =>{
  //     //     const student = this.students.find((p)=>p.studentID === item.studentId);
  //     //     return{
  //     //       ...item,
  //     //       student,
  //     //       totalCost:150
  //     //     };
  //     //   })
  //     // });



  //     this.studentService.checkStudent(this.studentdata).subscribe((res) => 
  //     { 
  //       console.log("shopping cart");
  //       this.studentdata = res;
  //       this.cartItems = cart.items.map((item) => {
  //         const student = this.studentdata.find((p) => p.studentID === item.studentId);
  //         return {
  //           ...item,
  //           student,
  //           totalCost:150            
  //         }
  //        })      
  //     } 
  //   );


  //   })
  // }


  checkStudent() {
    // this.studentService.checkStudent(this.studentdata).subscribe(res => {this.students =res.student,
    // this.total = res.total } );

    this.studentService.checkStudent(this.studentdata).subscribe((res) => {
    this.students = res.student,
      this.total = res.total
    });


  }

  ngOnDestroy(): void {

    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}

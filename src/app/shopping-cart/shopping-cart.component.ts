import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { StudentAppService } from '../shared/services/student-app.service';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { Observable } from 'rxjs/Observable';
import { IStudent } from '../shared/models/student.interface';
import { ShoppingCart } from '../shared/models/shopping-cart.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
// changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    public students:Observable<IStudent[]>;
    public cart:Observable<ShoppingCart>;
    public itemCount:number;

   private cartSubscription:Subscription;

   constructor( private studentService:StudentAppService,
       private shoppingCartService:ShoppingCartService) { }


  public emptyCart():void
  {
    this.shoppingCartService.empty();
  }    


  ngOnInit():void {
   // this.students = this.studentService.
   this.cart = this.shoppingCartService.get();
   this.cartSubscription = this.cart.subscribe((cart) => {
    this.itemCount  = cart.items.map((x) => x.quantity).reduce((p,n)=> p + n,0);
   });
  }

  public ngOnDestroy():void {
    if(this.cartSubscription)
    {
      this.cartSubscription.unsubscribe();
    }
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart.model';
import { Observer } from 'rxjs/Observer';
import { IStudent } from '../models/student.interface';
import { DeliveryOption } from '../models/delivery-option.model';
import { CartItem } from '../models/cart-item.model';
import { StorageService } from './storage.service';
import { StudentAppService } from './student-app.service';
import { StudentStatus } from '../models/studentStatus';

const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService{
    private storage:Storage;
    private subsciptionObservable:Observable<ShoppingCart>;
    private subscribers:Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
    private students:IStudent[];
     private deliveryOptions: DeliveryOption[];

    public constructor(private storageService:StorageService,private studentService:StudentAppService)
    {
        this.storage = this.storageService.get();
        var status = StudentStatus.NotSponsored;
        this.studentService.GetStudents(status,1)    
        .subscribe(response => this.students= response);

       this.subsciptionObservable = new Observable<ShoppingCart>((Observer:Observer<ShoppingCart>) =>
       {
           this.subscribers.push(Observer);
           Observer.next(this.retrieve());
           return () => { 
               this.subscribers = this.subscribers.filter((obs) => obs !== Observer);
           }
       });
      
    }

    public get():Observable<ShoppingCart>
    {
        return this.subsciptionObservable;
    }

    public addItem(student:IStudent,quantity:number):void
    {
        console.log("parag");
        const cart = this.retrieve();
        let item = cart.items.find((p) => p.studentId === student.studentID);
         if(item  === undefined)
         {
            item = new CartItem();
            item.studentId = student.studentID;
            item.name = student.firstName + " " +student.lastName;
            item.schoolName =student.schoolName;
            item.district =student.district;
            cart.items.push(item);
        } 

        item.quantity += quantity;
        cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);

        if(cart.items.length === 0) { 
            cart.deliveryOptionsId = undefined;
        }
        this.save(cart);
        this.dispatch(cart);
    } 

    public empty():void {
        const newCart = new ShoppingCart();
        this.save(newCart);
        this.dispatch(newCart);
        

    }

    private save(cart:ShoppingCart):void{
        this.storage.setItem(CART_KEY,JSON.stringify(cart));
    }

   
    private retrieve(): ShoppingCart { 
        const cart = new ShoppingCart();
        const storedCart =this.storage.getItem(CART_KEY);
        if(storedCart)
        {
            cart.updateForm(JSON.parse(storedCart));
        }
        return cart;
    } 

    // private calculateCart(cart:ShoppingCart):void {
    //     cart.itemsTotal = cart.items
    //     .map((item) =>this.students.find((p) => p.studentId === item.studentId))
    //     .reduce((previous,current) => previous +current , 0);

    //     // cart.deliveryTotal = cart.deliveryOptionsId ?
    //     //                     this.delivery
    // } 

    private dispatch(cart:ShoppingCart):void { 
        this.subscribers
            .forEach((sub) => {
                try{
                    sub.next(cart);
                } catch(e)
                {

                }
            });
    } 


    


}
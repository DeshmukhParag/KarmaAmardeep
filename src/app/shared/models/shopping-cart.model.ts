import { CartItem  } from './cart-item.model';

export class ShoppingCart { 
public items:CartItem[] = new Array<CartItem>();
public deliveryOptionsId:string;
public grossTotal:number = 0;
public deliveryTotal:number = 0;
public itemsTotal:number = 0;


public updateForm(src:ShoppingCart)
{
    this.items = src.items;
    this.deliveryOptionsId =src.deliveryOptionsId;
    this.grossTotal =src.grossTotal;
    this.deliveryTotal =src.deliveryTotal;
    this.itemsTotal  =src.itemsTotal;
}

}
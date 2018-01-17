export class DeliveryOption { 

    public id:string;
    public name:string;
    public price:number;
    public decription:string;

    public updateForm(src:DeliveryOption):void{
    this.id =src.id;
    this.name =src.name;
    this.decription =src.decription;
    this.price =src.price;
    }

}


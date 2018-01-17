import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../services/shipping.service';
import { Shipping } from '../models/shipping';

@Component({
  selector: 'app-view-shipping',
  templateUrl: './view-shipping.component.html',
  styleUrls: ['./view-shipping.component.css']
})
export class ViewShippingComponent implements OnInit {

  shippings:Shipping;

  constructor(private shippingService:ShippingService)
   {
     this.refresh();
    }

  ngOnInit() {
    
  }


  refresh()
  {
    this.shippingService.getAllShipping()
    .subscribe( (response) => { this.shippings = response});
  }

}

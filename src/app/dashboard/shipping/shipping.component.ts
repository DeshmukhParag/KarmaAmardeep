import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShippingService } from '../services/shipping.service';
import { Shipping } from '../models/shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  errorMsg:string;
  errors: string;  
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private shippingService:ShippingService,private router:Router) { }

  ngOnInit() {
  }

  addShipping({value , valid} : {value :Shipping,valid:boolean})
  { 
    console.log("parag");
    if(valid)
    {
      this.shippingService.addShipping(value)
      .subscribe(result => { 
            if(result)
            {
              this.router.navigate(['dashboard/view-shipping']);
            }
          },
         errors =>  this.errorMsg = errors
      )
    }
      
  }  

}

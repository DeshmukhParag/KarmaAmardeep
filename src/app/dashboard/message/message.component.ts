import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { IContact } from '../../shared/models/contact.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  contacts:IContact;
  errorMsg:string;

  constructor(private contactService:ContactService) {
    this.refresh();
   }



  refresh()
  {
    this.contactService.getContactData().subscribe(
      res=> this.contacts = res, 
      responseError => this.errorMsg = responseError
    );
  }
  ngOnInit() {
  }


  Delete(Id:string)
  {
    this.contactService.deleteContact(Id).subscribe(
      res=> this.refresh(), 
      responseError => this.errorMsg = responseError
    );
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { HomeDetails } from '../models/home.details.interface'; 
import { ConfigService } from '../../shared/utils/config.service';
import { BaseService} from '../../shared/services/base.service';
// import { Observable } from 'rxjs/Rx';
import {Observable } from 'rxjs/Observable';
// Add the RxJS Observable operators we need in this app.
// import '../../rxjs-operators';
import { Lamp } from '../models/lamp';



@Injectable()

export class DashboardService extends BaseService {

  baseUrl: string = ''; 

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getHomeDetails(): Observable<HomeDetails> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);
  
    return this.http.get(this.baseUrl + "/dashboard/home",{headers})
      .map(response => response.json())    
      .catch(this.handleError);
  }   

  

  getRepHomeDetails():Observable<HomeDetails>
  {
    var userID = localStorage.getItem('id'); 
    return this.http.get(this.baseUrl + "/RepresentativeAccount/GetRepHomeDetail/"+userID)
    .map(response => response.json())   
    .catch(this.handleError);
  } 

  getSponsorHomeDetail():Observable<HomeDetails>
  {
    var userID = localStorage.getItem('id');
    return this.http.get(this.baseUrl + "/RepresentativeAccount/GetSponsorHomeDetail/"+userID)
    .map(response => response.json())
    // .do(data=>console.log( "Dashboard ="+ JSON.stringify(data)))
    .catch(this.handleError);
  }


  getContactData() {
      return this.http.get(this.baseUrl + '/Contacts')
          .map((response: Response) => response.json())
          .catch(this.handleError);
  }  

  addLamp(model:Lamp)
  {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post( this.baseUrl +'/Lamp/InsertLamp',model,options)
    .map(res => true)     
    .catch(this.handleError);
  } 

  updateLamp(model:Lamp)
  {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post( this.baseUrl +'/Lamp/UpdateLamp',model,options)
    .map(res => true)     
    .catch(this.handleError);
  }

  getLamp(id:string)
  {
    return this.http.get(this.baseUrl + '/Lamp/GetLamp/'+id)
    .map((response:Response) => response.json())
    .catch(this.handleError);

  }



  getAllLamp()
  {
    return this.http.get(this.baseUrl + '/Lamp/GetAllLamp')
    .map((response:Response) => response.json())
    .catch(this.handleError);
  }

 


 


}

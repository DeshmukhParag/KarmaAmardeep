import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from '../utils/config.service';
import {BaseService} from "./base.service";

import { UserRegistration } from '../models/user.registration.interface';
import { RepresentativeRegistration } from '../models/representative.registration.interface';
import { Sponsor } from '../models/sponsor';


import { IToken } from '../models/IToken'; 
import { tokenNotExpired } from 'angular2-jwt';
 import { BehaviorSubject } from 'rxjs/Rx';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable } from 'rxjs/Observable';



@Injectable()

export class UserService extends BaseService {

  baseUrl: string = '';
  userName:string;

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  private representativeRole:boolean;
  private sponsorRole:boolean;
  private adminRole:boolean;

  private temproleName:string;
  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();

    localStorage.setItem('userEmail',this.userName);
  }

    register(email: string, password: string, firstName: string, lastName: string,location: string,roleName:string,phoneNumber:string): Observable<UserRegistration> {
    let body = JSON.stringify({ email, password, firstName, lastName,location,roleName,phoneNumber});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + "/accounts", body, options)
      .map(res => true)
      .catch(this.handleError);
  }  

  representativeRegister(model:RepresentativeRegistration): Observable<RepresentativeRegistration> {   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "/RepresentativeAccount",model, options)
      .map(res => true)
      .catch(this.handleError);
  }  

  sposnorRegistration(model:Sponsor):Observable<Sponsor>
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + "/SponsorAccount",model, options)
      .map(res => true)
      .catch(this.handleError);
  }
  
  model:any={};
  model1:IToken[] ; 

   login(userName, password)
    {
         let headers = new Headers();
         headers.append('Content-Type', 'application/json');
         return this.http.post(
                                this.baseUrl + '/auth/login',
                                JSON.stringify({ userName, password }),{ headers }
          )
          .map(res => this.model= res.json())      
          .map(res => {
          localStorage.setItem('auth_token',res.auth_token),
          localStorage.setItem('id',res.id),
          localStorage.setItem('userName',res.UserName),
          localStorage.setItem('roleName',res.roleName),    
          localStorage.setItem('FullName',res.FullName),   
          this.userName = res.UserName;       
          this.loggedIn = true;
          this._authNavStatusSource.next(true);
          return true;
      })      
      .catch(this.handleError);
     
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userName');
    localStorage.removeItem('id');
    localStorage.removeItem('roleName');
    localStorage.removeItem('FullName');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
  return this.loggedIn;
 // return tokenNotExpired()
  }
  

  isAdministrative()
  {
    this.temproleName=localStorage.getItem('roleName');
    if( this.temproleName == 'Admin')
    {     
        return this.representativeRole = true;
    }  
    return false;
  } 

  isSponsor()
  {
    this.temproleName =localStorage.getItem('roleName');
    if(this.temproleName == 'Sponsor' || this.temproleName == 'Admin')
    {
        return this.sponsorRole = true;
    }
    return false;
  } 


  isSponsors()
  {
    this.temproleName =localStorage.getItem('roleName');
    if(this.temproleName == 'Sponsor')
    {
        return this.sponsorRole = true;
    }
    return false;
  }

  isRepresentative()
  {
    this.temproleName = localStorage.getItem('roleName');
    if(this.temproleName == 'Representative' || this.temproleName == 'Admin')
    {
      return this.representativeRole = true;
    } 
    return false;
  } 

  isRepresentatives()
  {
    this.temproleName = localStorage.getItem('roleName');
    if(this.temproleName == 'Representative')
    {
      return this.representativeRole = true;
    } 
    return false;
  } 

  // private _handleError(error: Response)
  // {
  //     console.error(error);
  //     return Observable.throw(error || 'Server Error');
  // }

  data(){
  
  } 


  
}


import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { IRole } from '../models/IRole.interface'; 
import { BaseService } from '../../shared/services/base.service';
import { ConfigService } from  '../../shared/utils/config.service';
import {Observable } from 'rxjs/Observable';


@Injectable()
export class RoleService extends BaseService
{
     baseUrl:string = '';

     constructor( private http: Http, private configService: ConfigService){
        super();
        this.baseUrl = configService.getApiURI();
     } 

     addRoleService(roleName:string , description:string):Observable<IRole>
     { 
         let body =JSON.stringify({roleName,description});
         let headers = new Headers({'Content-Type':'application/json'});
         let options =new RequestOptions({headers:headers});
 
         return this.http.post(this.baseUrl + "/ApplicationRole" ,body, options)
         .map(res => true)
         .catch(this.handleError);
     } 


    
} 

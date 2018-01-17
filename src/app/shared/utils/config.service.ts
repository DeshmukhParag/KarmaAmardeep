import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
    _path:string;
 
    constructor() {
        //this._apiURI = 'http:/192.168.1.6:96/api';   
    // this._apiURI = 'http://amardeepwebapi.azurewebsites.net/api';
   this._apiURI = 'http://localhost:50295/api';
    
        // this._path = "http://localhost:50295/Photos/";
         this._path = "http://amardeepwebapi.azurewebsites.net/Photos/";

     
     }
 
     getApiURI() {
         return this._apiURI;
     }    

     getpath()
     {
         return this._path;
     }
}

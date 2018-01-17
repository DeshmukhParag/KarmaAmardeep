import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
    _path:string;
 
    constructor() {
    
   
   this._apiURI = 'http://localhost:50295/api';
    
        // this._path = "http://localhost:50295/Photos/";
        

     
     }
 
     getApiURI() {
         return this._apiURI;
     }    

     getpath()
     {
         return this._path;
     }
}

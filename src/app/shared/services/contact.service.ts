import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IContact } from '../models/contact.interface';
import { ConfigService } from '../utils/config.service';
import { BaseService } from "./base.service";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContactService extends BaseService {
    baseUrl: string = '';

    constructor(private http: Http, private configService: ConfigService) {
        super();
        this.baseUrl = configService.getApiURI();
    }


    addContact(model: IContact): Observable<IContact> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify({ model });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/Contact/AddContact", model, options)
            .map(res => true)
            .catch(this.handleError);
    }


    getContactData() {
        return this.http.get(this.baseUrl + '/Contact')
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }


    deleteContact(Id:string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.baseUrl + "/Contact//DeleteContact/" + Id, options)
    }




    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server Error');
    }



    //  paymentService(name: string):Observable<IContact>
    //  {
    //     console.log("hello");
    //     let body = JSON.stringify(name);
    //     let headers =new Headers({'Content-Type':'application/json'});
    //     let options= new RequestOptions({headers:headers});
    //    return this.http.put(this.baseUrl + "/Test/",options)
    //     .map(res => true)
    //     .catch(this.handleError);
    //  }


}

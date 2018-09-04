import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from '../services/url.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()

export class InventoryService {

    requestURL: string;

    constructor(public Dulcinski: UrlService,public http: HttpClient){
        this.requestURL = this.Dulcinski.getRequestUrl();
    }

    getProducts(): Observable<any>{
        return this.http.get(this.requestURL + '/api/products')
    }
}
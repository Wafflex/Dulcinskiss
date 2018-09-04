import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public apiUrl: string;


  constructor() { 
    this.apiUrl = "http://japodmanco.sytes.net/"
  }

  getRequestUrl(): any{
    return this.apiUrl;
  }

  
}

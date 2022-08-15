import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {

}



@Injectable({
  providedIn: 'root'
})

export class RandomMovie {

  constructor(private http: HttpClient) { }

//private baseUri = "https://electric-nodes-backend.herokuapp.com/";

private baseUri ="http://localhost:5000/"; 

  private params: any;
  private options: any;



  getUser(user: any): Observable<any> {
    return this.http.post(this.baseUri + 'login' , user);
  } 
  








}
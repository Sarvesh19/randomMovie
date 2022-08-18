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

//private baseUri = "https://whats-movie-backend.herokuapp.com/";

private baseUri ="http://localhost:5000/"; 

  private params: any;
  private options: any;



  getRandomMovie(criteria: any): Observable<any> {
    return this.http.get(this.baseUri + 'randomMovies' +"?vote="+ criteria.vote +"&genre="+criteria.genre );
  } 
  








}
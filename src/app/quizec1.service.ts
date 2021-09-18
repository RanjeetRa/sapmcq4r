import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Quizec1Service {
  counter = 0;

  constructor(private http: HttpClient) { 
  //   this.getJSON().subscribe(data => {
  //     console.log(data);
  // });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/sapec1-40.json");
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagshareService {
  
  counter :any;

  constructor() {
    this.counter = 0;
   }
}

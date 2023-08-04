import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private URL: string = 'https://playstore-af0a6-default-rtdb.firebaseio.com/collection.json';
  constructor(private http:HttpClient) {
    this.getResponse()
  }
  getResponse() {
    return this.http.get(this.URL);
  }
}

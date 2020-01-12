import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private httpClient: HttpClient) { }

  public Get(url){
    return this.httpClient.get(url);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient :HttpClient) { }
  API='https://coronavirus-19-api.herokuapp.com/countries';
  public getData(){
return this.httpClient.get(this.API);
  }
}

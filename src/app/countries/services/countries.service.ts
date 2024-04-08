import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) { }

  apiURL:string='https://restcountries.com/v3.1';

  searchCapital( term : string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`);
  }
}

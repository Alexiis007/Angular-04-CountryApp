import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) { }

  apiURL:string='https://restcountries.com/v3.1';

  private getCountriesRequest(URL:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${URL}`).pipe( catchError( error => of([])));
  }

  searchCapital( term : string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiURL}/capital/${term}`);
  }

  searchRegion( term : string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiURL}/region/${term}`);
  }

  searchCountry( term : string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiURL}/name/${term}`);
  }

  searchByAlphaCode( term : string):Observable<Country | null>{
    return this.getCountriesRequest(`${this.apiURL}/alpha/${term}`)
      .pipe(
        map(resultado => resultado.length > 0 ? resultado[0] : null ),
        catchError( error => of(null)));
  }
}

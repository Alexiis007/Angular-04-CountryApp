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

  searchCapital( term : string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`).pipe( catchError( error => of([])));
  }

  searchRegion( term : string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/region/${term}`).pipe( catchError( error => of([])));
  }

  searchCountry( term : string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`).pipe( catchError( error => of([])));
  }

  searchByAlphaCode( term : string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${term}`)
      .pipe(
        map(resultado => resultado.length > 0 ? resultado[0] : null ),
        catchError( error => of(null)));
  }
}

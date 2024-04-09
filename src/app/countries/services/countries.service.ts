import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) {  this.loadLocalStorage(); }

  apiURL:string='https://restcountries.com/v3.1';
  public cacheStore : CacheStore  = {
    byCapital:{term:'',countries:[]},
    byRegion:{region:'',countries:[]},
    byCountry:{term:'',countries:[]}
  }

  private saveLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(URL:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${URL}`).pipe( catchError( error => of([]))/*,delay(2000)*/);
  }

  searchCapital( term : string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiURL}/capital/${term}`)
      .pipe(
        tap(resultado=>{this.cacheStore.byCapital = {term : term, countries: resultado} }),
        tap(()=>this.saveLocalStorage())
      )
  }

  searchRegion( term : Region):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiURL}/region/${term}`)
    .pipe(
      tap(resultado=>{this.cacheStore.byRegion = {region : term, countries: resultado} }),
      tap(()=>this.saveLocalStorage())
    );;
  }

  searchCountry( term : string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiURL}/name/${term}`)
    .pipe(
      tap(resultado=>{this.cacheStore.byCountry = {term : term, countries: resultado} }),
      tap(()=>this.saveLocalStorage())
    );;
  }

  searchByAlphaCode( term : string):Observable<Country | null>{
    return this.getCountriesRequest(`${this.apiURL}/alpha/${term}`)
      .pipe(
        map(resultado => resultado.length > 0 ? resultado[0] : null ),
        catchError( error => of(null)));
  }
}

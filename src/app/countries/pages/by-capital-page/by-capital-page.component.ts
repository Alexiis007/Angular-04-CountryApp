import { Country } from './../../interfaces/country.interface';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  constructor(private Sv_Countries : CountriesService){}

  public Countries : Country[] = [];
  public isLoading : boolean = false;
  public termInit : string = "";
  
  ngOnInit(): void {
    this.Countries=this.Sv_Countries.cacheStore.byCapital.countries;
    this.termInit=this.Sv_Countries.cacheStore.byCapital.term;
  }

  searchByCapital(term : string):void{
    //se inicia la busqueda y se activa el loading
    this.isLoading = true;
    //El suscribe manda el resultado de la busqueda por lo tanto el loading se apaga
    //antes del suscribe ahi un pipe con delay en el service
    this.Sv_Countries.searchCapital(term).subscribe( Countries=>{this.Countries = Countries; this.isLoading = false;});
  }
}

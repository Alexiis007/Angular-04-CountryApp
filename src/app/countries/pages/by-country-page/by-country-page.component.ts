import { Component, OnInit, input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{
  constructor(private Sv_Countries : CountriesService){}

  public Countries : Country[] = [];
  public termInit : string = "";
  ngOnInit(): void {
    this.Countries=this.Sv_Countries.cacheStore.byCountry.countries;
    this.termInit = this.Sv_Countries.cacheStore.byCountry.term;
  }

  searchByCountry(term : string){
    this.Sv_Countries.searchCountry(term).subscribe( Countries => {this.Countries = Countries});
  }

}

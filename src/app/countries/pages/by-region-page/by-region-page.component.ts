import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{
 constructor(private Sv_Countries : CountriesService){}

  public Countries : Country[] = [];
  public regions : Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion ?: Region;

  ngOnInit(): void {
    this.Countries = this.Sv_Countries.cacheStore.byRegion.countries;
    this.selectedRegion = this.Sv_Countries.cacheStore.byRegion.region;
  }

 searchByRegion(term : Region){
  this.selectedRegion = term;
  this.Sv_Countries.searchRegion(term).subscribe(resultado =>{this.Countries = resultado});
 }
}

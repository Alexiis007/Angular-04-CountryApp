import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
 constructor(private Sv_Countries : CountriesService){}

  public Countries : Country[] = [];

 searchByRegion(term : string){
  this.Sv_Countries.searchRegion(term).subscribe(resultado =>{this.Countries = resultado});
 }
}

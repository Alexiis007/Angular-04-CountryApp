import { Country } from './../../interfaces/country.interface';
import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  constructor(private Sv_Countries : CountriesService){}

  public Countries : Country[] = [];

  searchByCapital(term : string):void{
    this.Sv_Countries.searchCapital(term).subscribe( Countries=>{this.Countries = Countries});
  }
}

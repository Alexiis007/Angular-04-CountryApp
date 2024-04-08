import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent {

  constructor(private activatedRoute : ActivatedRoute, private Sv_Countries : CountriesService, private router : Router){}
  
  public country ?: Country;

  ngOnInit():void{
    this.activatedRoute.params
      .pipe(switchMap(({id})=>this.Sv_Countries.searchByAlphaCode(id)))
      .subscribe(resultado => {
        if(!resultado)
        {
          return this.router.navigateByUrl("")
        }
        else{return this.country=resultado;         }
      })
  }
  
}

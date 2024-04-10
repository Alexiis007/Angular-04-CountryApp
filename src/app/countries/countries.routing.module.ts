import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
//Archivo de routing Hija
const routes : Routes=[
  //Las rutas se definen por su path y su componente
  {
    path:'byCapital',
    component: ByCapitalPageComponent
  },
  {
    path:'byCountry',
    component: ByCountryPageComponent
  },
  {
    path:'byRegion',
    component: ByRegionPageComponent
  },
  //En este caso esta ruta cuenta con un id el cual cambia la direccion de la ruta
  //dependiendo del valor que se le mande
  {
    path:'by/:id',
    component: CountryPageComponent
  },
  //En el config routing padre ya se habia definido una ruta defecto la cual mandaba siempre al modulo
  //countries que seria este modulo, una vez entra al modulo carga si es que tiene sus rutas
  //en este caso carga la defecto al iniciar:
  {
   path:'**',
   redirectTo:'byCapital'
  }
]

@NgModule({
  imports: [
    //El for child que indica que es una ruta hija
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }

//Este archivo debe estar importado en du archivo de modulos
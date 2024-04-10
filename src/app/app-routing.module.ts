import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';
const routes: Routes = [
  //Las rutas del share se agregan directo (usualmente no pasan de 3 rutas)
 {
  path:'home',
  component: HomePageComponent
 },
 {
  path:'about',
  component: AboutPageComponent
 },
 {
  path:'contact',
  component: ContactPagesComponent
 },
 //Las rutas de los modulos se encapsulan por modulo para no agregar todas las pages que tiene
 //el modulo simplemente se enlaza hacia el modulo, ya en el modulo tendra su propio routing.
 //shared cuenta como modulo pero como no pasan de 3 pages pues lo agregamos directo como se comento
 //mas arriva
 {
  path:'countries',
  loadChildren:()=>import('./countries/countries.module').then( m => m.CountriesModule )
 },
 //La definicion del la pagina o ruta principal o preedefinida se define con path"**" y con un redirectTo
 //Que serua un path definido anteriormente
 {
  path:'**',
  redirectTo:'countries'
 }
];

@NgModule({
  //el app routing es ForRoot, en los modulos de mas es ForChild
  //Tambien Notese que le mandamos las rutas (routes)
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//Para que el routing funcione se deben importar los modulos que se usaran en el app.module
//Esto solo aplica si es que se hara el definido del component directo
//En caso de que se hara referencia a un modulo como ruta ahi no se debe importar ya que la misma
//linea de codigo la importa
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { AboutPageComponent } from './home/components/about-page/about-page.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'countries',
    loadChildren: ()=> import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path:'**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

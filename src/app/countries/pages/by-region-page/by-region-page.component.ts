import { Component } from '@angular/core';
import { Region, Regiones } from '../../interfaces/regiones.interface';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries:Country[] = [];
  public selectedRegion?:Region;
  public rutas:Regiones[] =[
    {
      param:'Americas',
      name:'America',
    },
    {
      param:'Asia',
      name:'Asia',
    },
    {
      param:'Africa',
      name:'Africa',
    },
    {
      param:'Oceania',
      name:'Oceania',
    },
    {
      param:'Europe',
      name:'Europa',
    },
    {
      param:'Antarctic',
      name:'Antarctica',
    },
  ];
  public placeholder = 'Buscar por región';

  constructor( private countriesService:CountriesService ){}

  searchBox( term:Region){
    this.selectedRegion = term
    return this.countriesService.searchRegion( term )
          .subscribe( countries => this.countries = countries )
  }
}

import { Component } from '@angular/core';
import { Region, Regiones } from '../../interfaces/regiones.interface';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries:Country[] = [];
  public countriesRegion:Country[] = [];
  public message:string = '';
  public selectedRegion:Region = '';
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

  public placeholder:string = 'Buscar por region' ;

  constructor( private countriesService:CountriesService ){}

  searchByRegion( term:Region ){
    this.selectedRegion = term;
    this.placeholder = `Buscar por region ${ term }`
    return this.countriesService.searchRegion( term )
          .subscribe( countries => {
            this.countries = countries;
            this.countriesRegion = [];
          })
  }

  searchRegionByCountry( term:string ){
    this.countriesRegion = []
    this.message = '';
    if( term.length !== 0 ){
      this.countriesRegion = this.countries.filter( country => country.name.common.toLowerCase().startsWith( term.toLowerCase() ))
      if ( this.countriesRegion.length === 0 ) {
        this.message = `No se encontro el pais con el termino ${ term}`
      }
    }
  }
}

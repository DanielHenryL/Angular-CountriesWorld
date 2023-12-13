import { Component, OnInit } from '@angular/core';
import { Region, Regiones } from '../../interfaces/regiones.interface';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{

  public countries:Country[] = [];
  public countriesRegion:Country[] = [];
  public message:string = '';
  public selectedRegion:Region = '';
  public initialValue:string = '';
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

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.initialValue = this.countriesService.cacheStore.byRegion.term || '';
  }

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
      this.countriesRegion = this.countries.filter( country => country.name.common.toLowerCase().includes( term.toLowerCase() ))
      this.countriesService.cacheStore.byRegion={ term, countries:this.countriesRegion, region:this.selectedRegion}
      if ( this.countriesRegion.length === 0 ) {
        this.countriesService.cacheStore.byRegion={ term, countries:this.countries, region:this.selectedRegion}
        this.message = `No se encontro el pais con el termino ${ term}`
      }
      this.countriesService.saveToLocalStorage()
    }else{
      this.searchByRegion(this.selectedRegion)
    }
  }
}

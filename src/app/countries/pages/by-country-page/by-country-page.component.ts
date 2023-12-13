import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  public countries:Country[] = [];
  public initialValue:string = '';
  public placeholder = 'Buscar por país';

  constructor( private countriesService:CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term:string){
    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries
      })
  }
}

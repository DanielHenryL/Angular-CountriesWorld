import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  public countries:Country[] = [];
  public initialValue:string = '';
  public placeholder = 'Buscar por capial';

  constructor( private countriesService:CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string){
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries
      })
  }
}

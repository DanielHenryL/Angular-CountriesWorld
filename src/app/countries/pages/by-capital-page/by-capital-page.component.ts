import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];
  public placeholder = 'Buscar por capial';

  constructor( private countriesService:CountriesService){}

  searchBox(term:string){
    this.countriesService.searchCapital( term )
      .subscribe( countries => this.countries = countries )
  }
}

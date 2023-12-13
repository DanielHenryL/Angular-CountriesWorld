import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  public translationAcordion= false

  toggleAcordeon() {
    this.translationAcordion = !this.translationAcordion;
  }
  public country?:Country;

  constructor( private activedRoute:ActivatedRoute,private router:Router, private countriesService:CountriesService){}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap( ({code}) => this.countriesService.searchCountryByAlphaCode( code ))
      )
      .subscribe( country => {
        if ( !country ) {
          return this.router.navigateByUrl('countries/by-capital')
        }
        return this.country = country;
      })
  }
  getObjectKeys<T>(a:T):(keyof T)[] {
    return Object.keys(a as {}) as (keyof T)[];
  }

}

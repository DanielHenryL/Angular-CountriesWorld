import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/regiones.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor( private http:HttpClient) { }

  searchCapital( term:string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe( catchError( error => of([])))
  }

  searchCountry( term:string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>(url)
      .pipe( catchError( error => of([])))
  }

  searchRegion( term:Region ):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ term }`;
    return this.http.get<Country[]>(url)
      .pipe( catchError( error => of([])))
  }
}

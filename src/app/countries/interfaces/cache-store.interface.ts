import { Country } from "./country.interface";
import { Region } from "./regiones.interface";

export interface CacheStore{
  byCapital:TermCountries
  byCountry:TermCountries
  byRegion:TermRegion
}

export interface TermCountries{
  term:string;
  countries:Country[]
}

export interface TermRegion{
  term?:string
  countries:Country[];
  region:Region;
}

import { Country } from "./country.interface";
import { Region } from "./regiones.interface";

export interface CacheStore{
  byCapital:TermCountries
  byCountry:TermCountries
  byRegion:TermRegion
}

export interface TermCountries{
  term:string;
  country:Country[]
}

export interface TermRegion{
  term:Region;
  country:Country[]
}

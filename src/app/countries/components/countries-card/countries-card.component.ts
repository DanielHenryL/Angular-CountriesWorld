import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-card',
  templateUrl: './countries-card.component.html',
  styleUrl: './countries-card.component.css'
})
export class CountriesCardComponent {
  @Input()
  public countries:Country[] = []
}

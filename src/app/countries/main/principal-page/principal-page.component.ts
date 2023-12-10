import { Component } from '@angular/core';
import { Rutas } from '../../interfaces/rutasSidebar.interface';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent {
  public rutas:Rutas[] =[
    {
      param:'by-capital',
      name:'Por capital'
    },
    {
      param:'by-country',
      name:'Por país'
    },
    {
      param:'by-region',
      name:'Por región'
    },
  ]
}

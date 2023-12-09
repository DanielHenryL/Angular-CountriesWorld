import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public rutas = [
    {
      ruta:'by-capital',
      name:'Por capital'
    },
    {
      ruta:'by-country',
      name:'Por país'
    },
    {
      ruta:'by-region',
      name:'Por región'
    },
  ]
}

import { Component, Input } from '@angular/core';
import { Rutas } from '../../../countries/interfaces/rutasSidebar.interface';



@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input()
  public rutas:Rutas[] = []
}

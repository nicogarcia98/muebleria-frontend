import { Component } from '@angular/core';

interface NavLink {
  text: string;
  url: string;
  isActive: boolean;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  optionsMenu: NavLink[] = [{
    text: 'Tipos de Muebles',
    url: 'tipo-mueble',
    isActive: false
  }]
}

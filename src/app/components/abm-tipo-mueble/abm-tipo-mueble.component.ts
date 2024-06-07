import { Component, OnInit } from '@angular/core';
import { TipoMuebleService } from '../../services/tipo-mueble.service';
import { ITipoMueble } from '../../models/tipo-mueble.class';

@Component({
  selector: 'app-abm-tipo-mueble',
  templateUrl: './abm-tipo-mueble.component.html',
  styleUrl: './abm-tipo-mueble.component.scss'
})
export class AbmTipoMuebleComponent implements OnInit{

  tipoMueble: any;


  constructor(private tipoMuebleService: TipoMuebleService) {}

  ngOnInit(): void {
    const prueba: ITipoMueble = {
      codigo: 123,
      descripcion: 'Silla'
    }
    this.tipoMuebleService.crearTipoMueble(prueba).subscribe((data) => {
      this.tipoMueble = data;
    })
  }
}

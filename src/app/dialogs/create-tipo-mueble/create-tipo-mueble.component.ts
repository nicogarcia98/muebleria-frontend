import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { ITipoMueble } from '../../models/tipo-mueble.class';

export interface TipoMuebleData {
  codigo: number,
  descripcion: string
}

@Component({
  selector: 'app-create-tipo-mueble',
  templateUrl: './create-tipo-mueble.component.html',
  styleUrl: './create-tipo-mueble.component.scss'
})
export class CreateTipoMuebleComponent {
  newItem: ITipoMueble = {
    codigo: 0,
    descripcion: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CreateTipoMuebleComponent>,
  ) {}

}

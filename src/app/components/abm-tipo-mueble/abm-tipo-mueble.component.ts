import { Component, OnInit, signal } from '@angular/core';
import { TipoMuebleService } from '../../services/tipo-mueble.service';
import { ITipoMueble } from '../../models/tipo-mueble.class';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CreateTipoMuebleComponent } from '../../dialogs/create-tipo-mueble/create-tipo-mueble.component';

export class TableDataTipoMueble extends ITipoMueble {
  editable: boolean = false;
}

@Component({
  selector: 'app-abm-tipo-mueble',
  templateUrl: './abm-tipo-mueble.component.html',
  styleUrl: './abm-tipo-mueble.component.scss'
})
export class AbmTipoMuebleComponent implements OnInit{

  tipoMueble: any;
  displayedColumns: string[] = ['codigo', 'descripcion', 'acciones']

  dataTest = signal<TableDataTipoMueble[]>([
    {codigo: 1, descripcion: 'Silla', editable: false},
    {codigo: 2, descripcion: 'Sillon', editable: false},
    {codigo: 3, descripcion: 'Mesa', editable: false},
    {codigo: 4, descripcion: 'Cama', editable: false},
    {codigo: 5, descripcion: 'Cajonera', editable: false},
    {codigo: 6, descripcion: 'Placard', editable: false},
  ])

  constructor(
    private tipoMuebleService: TipoMuebleService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    // const prueba: ITipoMueble = {
    //   codigo: 123,
    //   descripcion: 'Silla'
    // }
    // this.tipoMuebleService.crearTipoMueble(prueba).subscribe((data) => {
    //   this.tipoMueble = data;
    // })
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateTipoMuebleComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dataTest.update((values) => {
        return [...values, result]
      })
    });
  }

  deleteItem(codigo: number) {
    this.dataTest.update((values) => {
      return values.filter(x => x.codigo != codigo)
    })
  }
  
  toggleEdit(codigo: number) {
    this.dataTest.update((values) => {
      const index = values.findIndex(x => x.codigo == codigo);
      if (index != -1) {
        values[index].editable = !values[index].editable;
      }
      return values
    })
  }

  editItem(codigo: number, descripcion: string) {
    this.dataTest.update((values) => {
      const index = values.findIndex(x => x.codigo == codigo);
      if (index != -1) {
        values[index].editable = false;
      }
      return values
    })
  }
}

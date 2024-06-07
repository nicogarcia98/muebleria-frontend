import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ITipoMueble } from '../models/tipo-mueble.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMuebleService extends BaseService{

  getContext(): string {
    return '/tipo-mueble';
  }
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  crearTipoMueble(dto: ITipoMueble): Observable<any> {
    return this.post<any>(this.getContext(), dto)
  }


}

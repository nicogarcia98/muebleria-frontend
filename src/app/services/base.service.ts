import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export abstract class BaseService {

  private baseURI = environment.apiUrl;

  abstract getContext(): string;
  
  constructor(private http: HttpClient) {}

  protected getAll<T>(apiMethod: string): Observable<T> {
    return this.http.get<T>(this.baseURI + apiMethod);
  }

  protected post<T>(apiMethod: string, body: any): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post<T>(this.baseURI + apiMethod, body, {headers});
  }

  protected put<T>(apiMethod: string, body: any): Observable<T> {
    return this.http.put<T>(this.baseURI + apiMethod, body);
  }

  protected delete<T>(apiMethod: string, id: number): Observable<void> {
    return this.http.delete<void>(this.baseURI + apiMethod);
  }
}
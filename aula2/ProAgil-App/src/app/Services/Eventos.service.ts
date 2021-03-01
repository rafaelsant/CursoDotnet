import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from 'src/assets/Models/Eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private url: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
constructor(private http: HttpClient) {
  this.url = 'http://localhost:5000/api/Eventos';
 }
 getEventos(): Observable<Eventos[]>{
   return this.http.get<Eventos[]>(this.url);
 }
 getEvento(id: number): Observable<Eventos>{
   return this.http.get<Eventos>(`${this.url}/${id}`);
 }
 getEventoByTema(tema: string): Observable<Eventos[]>{
   return this.http.get<Eventos[]>(`${this.url}/getByTema/${tema}`);
 }
 postEvento(evento: Eventos): Observable<Eventos>{
   return this.http.post<Eventos>(this.url, evento);
 }
 updateEvento(id: number, evento: Eventos): Observable<Eventos>{
   return this.http.put<Eventos>(this.url + '/' + id, evento);
 }
 deleteEvento(evento: Eventos | number): Observable<void>{
   const id = typeof evento === 'number' ? evento : evento.id;
   const url = `${this.url}/${id}`;
   return this.http.delete<void>(url);
 }
}

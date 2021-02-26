import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from 'src/assets/Eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private url:string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
constructor(private http:HttpClient) {
  this.url = 'http://localhost:5000/api/Eventos';
 }
 getEventos():Observable<Eventos[]>{
   return this.http.get<Eventos[]>(this.url);
 }
 getEvento(id:number):Observable<Eventos>{
   return this.http.get<Eventos>(`${this.url}/${id}`);
 }
 deleteEvento(evento:Eventos | number):Observable<void>{
   const id = typeof evento === 'number' ? evento : evento.eventoId;
   const url = `${this.url}/${id}`;
   return this.http.delete<void>(url)

 }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Palestrante } from 'src/assets/Models/Palestrante';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService {
  private url: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient) {
  this.url = 'http://localhost:5000/api/Palestrantes';
 }

getAllPalestrantes(): Observable<Palestrante>{
  return this.http.get<Palestrante>(this.url);
}
getPalestranteByName(name: string): Observable<Palestrante[]>{
  return this.http.get<Palestrante[]>(`${this.url}/${name}`);
}
postPalestrante(palestrante: Palestrante): Observable<Palestrante>{
  return this.http.post<Palestrante>(this.url, palestrante);
}
updatePalestrante(id: number, palestrante: Palestrante): Observable<Palestrante>{
  return this.http.put<Palestrante>(this.url + '/' + id, palestrante);
}
deletePalestrante(palestrante: number | Palestrante): Observable<void>{
  const id = typeof palestrante === 'number' ? palestrante : palestrante.id;
  const url = `${this.url}/${id}`;
  return this.http.delete<void>(url);
}
}

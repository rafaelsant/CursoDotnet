import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Eventos } from 'src/assets/Models/Eventos';
import { EventosService } from '../../Services/Eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = true;

  // tslint:disable-next-line: variable-name
  private _filtroLista = '';
  public get filtroLista(): string{
    return this._filtroLista;
  }
  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: Eventos[] = [];

  constructor(private service: EventosService) { }

  ngOnInit(): any {
    this.getEventos();
  }

  esconderImagem(): any{
    this.mostrarImagem = !this.mostrarImagem;
  }
  getEventos(): any{
    this.service.getEventos().subscribe(res => {
      this.eventos = res;
    }, error => console.log(error));
  }
  filtrarEventos(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
}

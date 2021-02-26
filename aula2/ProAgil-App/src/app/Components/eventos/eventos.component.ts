import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/assets/Eventos';
import { EventosService } from '../../Eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos!: Eventos[];
  constructor(private service:EventosService) { }

  ngOnInit() {
    this.getEventos();
  }
  getEventos(){
    this.service.getEventos().subscribe(res=>{
      this.eventos = res;
    },error=>console.log(error));

  }
}

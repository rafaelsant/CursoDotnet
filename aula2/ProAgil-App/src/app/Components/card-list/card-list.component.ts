import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/Eventos.service';
import { Eventos } from 'src/assets/Eventos';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
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

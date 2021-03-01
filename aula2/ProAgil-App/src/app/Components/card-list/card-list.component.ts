import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/Services/Eventos.service';
import { Eventos } from 'src/assets/Models/Eventos';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  eventos!: Eventos[];
  constructor(private service: EventosService) { }

  ngOnInit(): any {
    this.getEventos();
  }
  getEventos(): any{
    this.service.getEventos().subscribe(res => {
      this.eventos = res;
    }, error => console.log(error));

  }

}

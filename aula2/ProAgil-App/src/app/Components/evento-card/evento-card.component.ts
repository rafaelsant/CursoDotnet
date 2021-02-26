import { Component, Input, OnInit } from '@angular/core';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EventosService } from 'src/app/Eventos.service';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent implements OnInit {

  @Input() eventoId!: number;
  @Input() local!: string;
  @Input() dataEvento!: Date;
  @Input() tema!: string;
  @Input() qtdPessoas!: number;
  @Input() lote!: string;
  constructor(private service:EventosService) { }
  faTrash = faTrash;
  faEdit = faEdit;
  ngOnInit() {
  }
  deleteEvento(id:number){
    this.service.deleteEvento(id).subscribe(()=>{
      alert('Evento Deletado com sucesso')
      window.location.reload()
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Eventos } from 'src/assets/Models/Eventos';
import { EventosService } from '../../Services/Eventos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = true;
  eventosFiltrados: any = [];
  eventos: Eventos[] = [];
  registerForm!: FormGroup;

  modalRef!: BsModalRef;

  // tslint:disable-next-line: variable-name
  private _filtroLista = '';
  public get filtroLista(): string{
    return this._filtroLista;
  }
  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  constructor(
    private service: EventosService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private localeService: BsLocaleService
    ){
      this.localeService.use('pt-br');
     }

    ngOnInit(): any {
      this.validation();
      this.getEventos();
    }
    validation(): any{
      this.registerForm = this.formBuilder.group({
        local: ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50)]],
        dataEvento: ['', Validators.required],
        tema: ['', Validators.required],
        qtdPessoas: ['',
        [Validators.required,
        Validators.max(120000)]],
        imagemUrl: ['', Validators.required],
        telefone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }
    get f(): any{
      return this.registerForm.controls;
    }
    salvarAlteracao(){

    }
    openModal(template: TemplateRef<any>): any {
      this.modalRef = this.modalService.show(template);
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { EventoCardComponent } from './Components/evento-card/evento-card.component';
import { CardListComponent } from './Components/card-list/card-list.component';
import { NavComponent } from './Components/nav/nav.component';

import { DateTimeFormatPipePipe } from './Pipes/DateTimeFormatPipe.pipe';

import { PalestranteService } from './Services/Palestrante.service';
import { EventosService } from './Services/Eventos.service';



@NgModule({
  declarations: [
    AppComponent,
      EventosComponent,
      EventoCardComponent,
      CardListComponent,
      DateTimeFormatPipePipe,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
    EventosService,
    PalestranteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

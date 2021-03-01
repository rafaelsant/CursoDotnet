import { Eventos } from './Eventos';
import { Palestrante } from './Palestrante';

export interface RedesSociais {
   id: number;
   nome: number;
   uRL: string;
   eventoId: number;
   evento: Eventos;
   palestranteId: number;
   palestrante: Palestrante;
}

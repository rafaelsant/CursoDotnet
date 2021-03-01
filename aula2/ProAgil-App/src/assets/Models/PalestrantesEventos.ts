import { Eventos } from './Eventos';
import { Palestrante } from './Palestrante';

export interface PalestrantesEventos {
  id: number;
  palestrante: Palestrante;
  eventoId: number;
  evento: Eventos;
}

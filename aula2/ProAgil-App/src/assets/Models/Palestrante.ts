import { PalestrantesEventos } from './PalestrantesEventos';
import { RedesSociais } from './RedesSociais';

export interface Palestrante {
  id: number;
  nome: string;
  miniCurriculo: string;
  imagemUrl: string;
  telefone: string;
  email: string;
  redesSociais: RedesSociais[];
  palestrantesEventos: PalestrantesEventos[];
}

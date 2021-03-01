import { Lote } from './Lote';
import { Palestrante } from './Palestrante';
import { RedesSociais } from './RedesSociais';

export interface Eventos {
    id: number;
    local: string;
    dataEvento: Date;
    tema: string;
    qtdPessoas: number;
    imagemUrl: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    redesSociais: RedesSociais[];
    palestrantesEventos: Palestrante[];
}

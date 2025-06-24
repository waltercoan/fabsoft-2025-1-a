import { Cliente } from "./cliente";

export class Carro {
    id: number;
    marca: string;
    modelo: string;
    placa: string;
    cliente: Cliente;
    foto: string; //ALTERAR AQUI
    arquivoFoto: string; //ALTERAR AQUI
    mimeType: string; //ALTERAR AQUI

}

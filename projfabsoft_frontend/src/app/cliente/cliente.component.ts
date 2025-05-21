import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

    public listaClientes:Cliente[] = [];
    constructor(
      private clienteService:ClienteService
    ){}

    ngOnInit(): void {
      this.clienteService.getClientes().subscribe(resposta => {
          this.listaClientes = resposta;
      })
    }
}

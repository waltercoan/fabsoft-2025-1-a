import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cliente',
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  providers: [ClienteService]
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

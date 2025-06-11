import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  providers: [ClienteService, Router]
})
export class ClienteComponent {

    public listaClientes:Cliente[] = [];
    
    constructor(
      private clienteService:ClienteService,
      private router:Router
    ){}

    ngOnInit(): void {
      this.clienteService.getClientes().subscribe(resposta => {
          this.listaClientes = resposta;
      })
    }
    novo(){
      this.router.navigate(['clientes/novo']);
    }
}

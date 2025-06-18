import { Component } from '@angular/core';
import { Carro } from '../model/carro';
import { CarroService } from '../service/carro.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-carro',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-carro.component.html',
  styleUrl: './form-carro.component.css',
  providers: [CarroService, Router]
})
export class FormCarroComponent {
    carro:Carro = new Carro();

    constructor(
      private carroService: CarroService,
      private router: Router,
      private activeRouter: ActivatedRoute
    ) {
        const id = this.activeRouter.snapshot.paramMap.get('id');
        
        if (id) {
          this.carroService.getCarroById(id).subscribe(carro => {
            this.carro = carro;
        });
      }
    }

    salvar(){
      this.carroService.saveCarro(this.carro)
          .subscribe( res => {
            this.router.navigate(['carros']);
          });
    }

}


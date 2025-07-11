import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { CarroComponent } from './carro/carro.component';
import { FormCarroComponent } from './form-carro/form-carro.component';
import { RevisaoComponent } from './revisao/revisao.component';
import { FormRevisaoComponent } from './form-revisao/form-revisao.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    {path: 'clientes', component: ClienteComponent},
    {path: 'clientes/novo', component: FormClienteComponent},
    {path: 'clientes/alterar/:id', component: FormClienteComponent},

    {path: 'carros', component: CarroComponent},
    {path: 'carros/novo', component: FormCarroComponent},
    {path: 'carros/alterar/:id', component: FormCarroComponent},

    {path: 'revisoes', component: RevisaoComponent},
    {path: 'revisoes/novo', component: FormRevisaoComponent},
    {path: 'revisoes/alterar/:id', component: FormRevisaoComponent},

    {path: '', component: HomeComponent},
    
    {path: 'chat', component: ChatComponent},

];


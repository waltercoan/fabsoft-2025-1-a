# Fábrica de Software 2025/1

## Repositório dos alunos
- [Repos](https://gist.github.com/bfed97e91a670a0ccb127ad49f1fda12.git)


## Propostas de projeto

- Nome do sistema Ex:(Sistema para Mecânica)
  - Funcionalidade 1 Cadastrar dados do Cliente
  - Funcionalidade 2 Cadastrar veículos
  - Funcionalidade 3
<s>

- Nome do sistema Ex:(Sistema para Mecânica)
  - Funcionalidade 1 Cadastrar dados do Cliente
  - Funcionalidade 2 Cadastrar veículos
  - Funcionalidade 3
</s>

## Livro Eng Software Moderna
[Eng. Soft Moderna - Requisitos](https://engsoftmoderna.info/cap3.html)

## Histórias de Usuário
- Como um Atendente eu gostaria de registrar os dados do cliente como: nome, endereço, telefone, email
- Como um Atendente eu gostaria de registrar os dados do Carro do cliente como: marca, modelo, placa
- Como um Atendente eu gostaria de vincular o Carro ao Cliente
- Como um Atedente eu gostaria de agendar uma revisão com os seguintes dados: cliente, carro, data entrada, data saida, valor da revisão
- Como um Atendente eu gostaria de vincular peças trocadas na revisão com os seguintes dados: codigo, nome, preço unitário
- Como um Atendente eu gostaria de vincular os serviços de mão de obra realizados na revisão com os seguintes dados: nome do funcionário, quantidade de horas, valor

## Comandos do Git

### Instalação
[Git Bash](https://git-scm.com/downloads)

### Configuração inicial

```
git config --global user.name "NOME DO USUARIO NO GITHUB"
git config --global user.email "EMAIL DA CONTA DO GITHUB"
```
### Tipos de mensagens do commit

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

### Commit e Push

```
git add .
git commit -m "tipo: o que foi feito"
git push -u origin main
```

### Criar um branch a partir da branch atual
```
git checkout -b branch-seunome
```

### Revisão de Java

[Download JDK](https://adoptium.net/)

- JRE - Java Runtime Environment (java.exe)
  - Máquina virtual do Java - interpreta o Bytecode(.class) do Java para linguagem de máquina
- JDK - Java Development Kit (javac.exe)
  - Compilar o código Java em bytecode (.class)

### Criação de projeto no VSCode com Maven
1) teclar F1
2) digitar Java e escolher a opção create new java project
3) project type: MAVEN
4) Archetype: No Archetype
5) pacote digitar domínio ao contrário ex: br.univille
6) nome do projeto em minúsculo
7) usar a pasta sugerida pelo vscode


### Diagrama de classes
![Diagrama de Classes](./diagramas/png/classes.png)

### Criar as entidades
```bash
@workspace #sym:## Histórias de Usuário por favor, encontre as entidades
```

### Gerar as classes Java das entidades
```bash
@workspace por favor, gere no pacote br.univille.projfabsoft.entity as classes java para representar as entidades
```

### Gerar o diagrama de entidades UML
```bash
@workspace por favor, gere um diagrama uml utilizando o padrão plantuml para as classes no pacote br.univille.projfabsoft.entity
```
## Diagrama de classes Entidade (Domínio)
![Diagrama de Entidades](./diagramas/png/diagramadeclasses.png)

## Prompts Aula 08/04/2025
- Encontrar as entidades nas histórias de usuário
```bash
@workspace #sym:## Histórias de Usuário quais são as entidades
```
- Gerar as classes java das entidades
```bash
@workspace por favor, crie as classe em java no pacote entity para representar as entidades
```
- Gerar o Diagrama de Classes de Entidade (Domínio)
```bash
@workspace por favor gere um diagrama uml no padrão plantuml das classes do pacote br.univille.projfabsoft
```
- Instalar a extensão [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)

## Clean Architecture

[Livro Arquitetura Limpa](https://integrada.minhabiblioteca.com.br/reader/books/9788550808161/pageid/0)

![Arquitetura Limpa](./diagramas/CleanArchitecture.jpg)

## Frontend Angular

- Criar o projeto Angular
```bash
ng new projfabsoft-frontend
```

- Acessar a pasta do projeto

```bash
cd projfabsoft-frontend
```

- Executar o servidor do Angular

```bash
ng serve
```
- Para acessar o frontend utilize o link [http://localhost:4200](http://localhost:4200)

- Instalação do Bootstrap

```bash
npm install bootstrap
```

- No arquivo angular.json [🔗](./projfabsoft-frontend/angular.json)

```json
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.css"
],
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.js"
]
```

### Gerando a primeira tela de Cliente 

- Gerando o componente do Angular

```bash
ng generate component cliente
```

- Criando a interface gráfica HTML /src/app/cliente/cliente.component.html [🔗](./projfabsoft-frontend/src/app/cliente/cliente.component.html)

```html
<main class="container">
    <table class="table">
        ....
    </table>
</main>
```

- Criando a classe Model

```bash
ng generate class model/cliente
```

- Código da classe /src/app/model/cliente.ts [🔗](./projfabsoft-frontend/src/app/model/cliente.ts)

```ts
export class Cliente {
    id: number;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    dataNascimento: Date;
}
```

- Configurar o arquivo tsconfig.json [🔗](./projfabsoft-frontend/tsconfig.json) para suportar a não inicialização dos atributos 

```bash
"compilerOptions": {
    "strictPropertyInitialization": false,
} 
```

- Gerar o serviço

```bash
ng generate service service/cliente
```

- Codigo do serviço /src/app/service/cliente.service.ts [🔗](./projfabsoft-frontend/src/app/service/cliente.service.ts)

```ts
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiURL = "http://localhost:8080/api/v1/clientes";
  
  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.apiURL);
  }

}
```

- Alterar o arquivo /src/app/app.component.html [🔗](./projfabsoft-frontend/src/app/app.component.html) para gerar apenas a tela dos componentes

```html
<router-outlet />
```

- Modificar o código do componente /src/app/cliente/cliente.component.ts [🔗](./projfabsoft-frontend/src/app/cliente/cliente.component.ts) para chamar o serviço e guardar a lista de clientes em um atributo

```ts
import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  providers: [ClienteService]
})
export class ClienteComponent {
  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    console.log("Carregando clientes...");
    this.clienteService.getClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }
}
```

- Modificar o arquivo /src/app/cliente/cliente.component.html [🔗](./projfabsoft-frontend/src/app/cliente/cliente.component.html) para desenhar a tabela de clientes

```html
<main class="container">
    <h2>Clientes</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let umCliente of listaClientes">
                <td>{{umCliente.nome}}</td>
            </tr>
        </tbody>
    </table>
</main>
```

- Modificar o arquivo /src/app/app.routes.ts [🔗](./projfabsoft-frontend/src/app/app.routes.ts) para incluir a rota para o componente

```ts
import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
export const routes: Routes = [
    { path: 'clientes', component: ClienteComponent }
];
```

- Rodar a aplicação

```bash
ng serve
```

- [Cross-origin resource sharing](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing)

- No projeto Backend Java Spring Boot crie um pacote chamado br.univille.projfabsoft.config, e dentro dele uma classe WebConfig.java [🔗](./projfabsoft/src/main/java/br/univille/projfabsoft/config/WebConfig.java) com o seguinte código:


```java
package br.univille.projfabsoft.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer  {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedHeaders("*")
                .allowedOriginPatterns("*")
                .allowedOrigins("*")
                .allowedMethods("*")
                .maxAge(1800);

    }
}
```
## Criação da tela de cadastro de clientes

- Alterar o arquivo /src/app/cliente/cliente.component.ts para importar o Router e criar a função novo()

```ts
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  providers: [ClienteService, Router]
})

constructor(
    private clienteService:ClienteService,
    private router:Router
){}
novo(){
  this.router.navigate(['clientes/novo']);
}    
```
- Alterar o arquivo /src/app/cliente/cliente.component.html criar o botao para a nova tela de formulário

```html
<a (click)="novo()" class="btn btn-primary">Novo</a>
```

- Alterar o arquivo /app/app.routes.ts para registrar a rota da nova tela

```ts
import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

export const routes: Routes = [
    { path: 'clientes', component: ClienteComponent},
    { path: 'clientes/novo', component: FormClienteComponent},
];
```

- Abrir o console e digitar o comando para criar um novo componente que será a tela de cadastro

```bash
ng generate component form-cliente
```

- Alterar o arquivo /app/service/cliente.service.ts para incluir o método de salvar o cliente e chamar o endpoint POST da API

```ts
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiURL = "http://localhost:8080/api/v1/clientes";
  
  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.apiURL);
  }

  saveCliente(cliente:Cliente){
    return this.http.post(this.apiURL,cliente);
  }

}
``` 

- Alterar o codigo do arquivo /app/form-cliente/form-cliente.component.ts para importar os componentes e chamar o método salvar do serviço

```ts
import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css',
  providers: [ClienteService, Router]
})
export class FormClienteComponent {
    cliente: Cliente = new Cliente();

    constructor(
      private clienteService:ClienteService,
      private router:Router
    ){}

    salvar(){
      this.clienteService.saveCliente(this.cliente)
        .subscribe(resultado => {
            this.router.navigate(['clientes']);
        });
    }
}
```

- Alterar o codigo do arquivo /app/form-cliente/form-cliente.component.html para desenhar a tela

```ts
<main class="container">
    <h2>Cliente</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="txtNome">Nome</label>    
                <input type="text" 
                    [(ngModel)]="cliente.nome"
                    class="form-control"
                    id="txtNome">
            </div>
        </div>
        <button (click)="salvar()" 
        class="btn btn-primary">Salvar</button>
    </div>
</main>
```

## Funcionalidade de ALTERAR

- Modifique o controlador [ClienteController](./projfabsoft/src/main/java/br/univille/projfabsoft/controller/ClienteController.java) no projeto Java Spring Boot para incluir um novo endpoint para buscar um único cliente pelo ID

```java
@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {

    @GetMapping("/{id}")	
    public ResponseEntity<Cliente> getClienteId(@PathVariable Long id){
        var cliente = service.getById(id);

        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }
```

- Retorne ao projeto ANGULAR e altere o service do [cliente.service.ts](./projfabsoft_frontend/src/app/service/cliente.service.ts) para criar o método para buscar o cliente pelo ID

```ts
  getClienteById(id: any) {
    return this.http.get<Cliente>(this.apiURL + '/' + id);
  }
```

- Altere a tela do Cliente [cliente.component.html](./projfabsoft_frontend/src/app/cliente/cliente.component.html) para incluir o botao ALTERAR na tela

```html
      <table class="table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Data Nascimento</th>
                <th></th> <!-- ALTERADO-->
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let umCliente of listaClientes">
                <td>{{umCliente.nome}}</td>
                <td>{{umCliente.endereco}}</td>
                <td>{{umCliente.telefone}}</td>
                <td>{{umCliente.email}}</td>
                <td>{{umCliente.dataNascimento | date:'dd/MM/yyyy'}}</td>
                <td><a (click)="alterar(umCliente)" 
                    class="btn btn-secondary">Alterar</a></td> <!-- ALTERADO-->
            </tr>
        </tbody>
    </table>
```

- Altere o controlador da tela [cliente.component.ts](./projfabsoft_frontend/src/app/cliente/cliente.component.ts) para incluir a função alterar()

```ts
  alterar(cliente:Cliente){
      this.router.navigate(['clientes/alterar', cliente.id]);
  }
```

- Altere o arquivo de rotas da aplicação [app.routes.ts](./projfabsoft_frontend/src/app/app.routes.ts) para incluir a nova rota de alterar

```ts
import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

export const routes: Routes = [
    {path: 'clientes', component: ClienteComponent},
    {path: 'clientes/novo', component: FormClienteComponent},
    {path: 'clientes/alterar/:id', component: FormClienteComponent} //ALTERADO
];
```

- Altere o controlador do formulário do cliente [form-cliente.component.ts](./projfabsoft_frontend/src/app/form-cliente/form-cliente.component.ts) para receber o id do cliente, chamar o serviço do cliente e mostrar em tela os dados do cliente retornado pelo backend

```ts
import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //ALTERADO

@Component({
  selector: 'app-form-cliente',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css',
  providers: [ClienteService, Router]
})
export class FormClienteComponent {
    cliente:Cliente = new Cliente();

    constructor(
      private clienteService: ClienteService,
      private router: Router,
      private activeRouter: ActivatedRoute //ALTERADO
    ) {
        //ALTERADO
        const id = this.activeRouter.snapshot.paramMap.get('id');
        
        if (id) {
          this.clienteService.getClienteById(id).subscribe(cliente => {
            this.cliente = cliente;
        });
        //ALTERADO
      }
    }

    salvar(){
      this.clienteService.saveCliente(this.cliente)
          .subscribe( res => {
            this.router.navigate(['clientes']);
          });
    }

}
```

- Modifique o service do cliente [cliente.service.ts](./projfabsoft_frontend/src/app/service/cliente.service.ts) para na função saveCliente() verificar se a propriedade id estiver preenchida, chamar o método PUT da API.

```ts
  saveCliente(cliente:Cliente){
    if(cliente.id){
      return this.http.put(this.apiURL + '/' + cliente.id, cliente);
    }
    return this.http.post(this.apiURL,cliente);
  }
```
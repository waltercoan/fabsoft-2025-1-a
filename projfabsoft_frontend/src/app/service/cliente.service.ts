import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl = (window as any).env.apiUrl;
  apiURL = this.apiUrl + "/clientes";

  constructor(private http:HttpClient) { }

  getClientes(){
     return this.http.get<Cliente[]>(this.apiURL);
  }
  saveCliente(cliente:Cliente){
    if(cliente.id){
      return this.http.put(this.apiURL + '/' + cliente.id, cliente);
    }
    return this.http.post(this.apiURL,cliente);
  }
  getClienteById(id: any) {
    return this.http.get<Cliente>(this.apiURL + '/' + id);
  }
  excluirCliente(id: any){
    return this.http.delete<Cliente>(this.apiURL + '/' + id);
  }
}

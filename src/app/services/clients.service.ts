import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }
  
  ToutAfficher() {
    return this.http.get<Clients[]>("http://localhost:8080/clients").pipe()
  }

  RecupUn(id: number) {
    return this.http.get<Clients>("http://localhost:8080/clients/"+id).pipe()
  }
  ajouter(clients: Clients) {
    return this.http.post("http://localhost:8080/clients",clients).pipe();
  }
  MettreAjour(id: number, clients: Clients) {
    return this.http.put("http://localhost:8080/clients/"+id,clients).pipe();
  }
  supprimer(id: number) {
    return this.http.delete("http://localhost:8080/clients/"+id).pipe()

  }



}

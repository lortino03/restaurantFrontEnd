import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
    
  ToutAfficher() {
    return this.http.get<Commande[]>("http://localhost:8080/commande").pipe()
  }

  RecupUn(id: number) {
    return this.http.get<Commande>("http://localhost:8080/commande/" + id).pipe()
  }
  ajouter(commande: Commande) {
    return this.http.post("http://localhost:8080/commande", commande).pipe();
  }
  MettreAjour(id: number, commande: Commande) {
    return this.http.put("http://localhost:8080/commande/"+id,commande).pipe();
  }
  supprimer(id: number) {
    return this.http.delete("http://localhost:8080/commande/" + id).pipe()

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plats } from '../models/plats';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  constructor(private http: HttpClient) { }
     
  ToutAfficher() {
    return this.http.get<Plats[]>("http://localhost:8080/plats").pipe()
  }

  RecupUn(id: number) {
    return this.http.get<Plats>("http://localhost:8080/plats/" + id).pipe()
  }
  ajouter(plats: Plats) {
    return this.http.post("http://localhost:8080/plats", plats).pipe();
  }
  MettreAjour(id: number, plats: Plats) {
    return this.http.put( "http://localhost:8080/plats/"+id,plats).pipe();
  }
  supprimer(id: number) {
    return this.http.delete("http://localhost:8080/plats/" + id).pipe()

  }

}

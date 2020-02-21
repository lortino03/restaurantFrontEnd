import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employes } from '../models/employes';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  ToutAfficher() {
    return this.http.get<Employes[]>("http://localhost:8080/employes").pipe()
  }
  RecupUn(id: number) {
    return this.http.get<Employes>("http://localhost:8080/employes/" + id).pipe()
  }
  ajouter(employes: Employes) {
    return this.http.post("http://localhost:8080/employes",employes).pipe();
  }
  MettreAjour(id: number, employes: Employes) {
    return this.http.put("http://localhost:8080/employes/"+id,employes).pipe();
  }
  supprimer(id: number) {
    return this.http.delete("http://localhost:8080/employes/"+id).pipe()
  }

  getByLogin(employes: Employes) {
    return this.http.post<boolean>("http://localhost:8080/employes/connexbool",employes).pipe();
  } 
  getByLoginToken(employes: Employes){
    return this.http.post<Employes>("http://localhost:8080/employes/token",employes).pipe();
  }
}

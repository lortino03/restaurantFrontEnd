import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tables } from '../models/tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http:HttpClient) { }
  
  ToutAfficher() {
    return this.http.get<Tables[]>("http://localhost:8080/tables").pipe()
  }

  RecupUn(id: number) {
    return this.http.get<Tables>("http://localhost:8080/tables/"+id).pipe()
  }
  ajouter(tables: Tables) {
    return this.http.post("http://localhost:8080/tables",tables).pipe();
  }
  MettreAjour(id:number, table: Tables){
    return this.http.put("http://localhost:8080/tables/"+id,table).pipe()
  }
  supprimer(id: number) {
    return this.http.delete("http://localhost:8080/tables/"+id).pipe()

  }

}

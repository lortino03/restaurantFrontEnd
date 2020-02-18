import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employes } from '../models/employes';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http:HttpClient) { }

  ToutAfficher(){
    return this.http.get<Employes[]>("http://localhost:8080/employes").pipe()
  }
}

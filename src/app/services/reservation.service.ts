import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  ToutAfficher() {
    return this.http.get<Reservation[]>("http://localhost:8080/reservation").pipe()
  }

  RecupUn(id: number) {
    return this.http.get<Reservation>("http://localhost:8080/reservation/" + id).pipe()
  }
  ajouter(reservation: Reservation) {
    return this.http.post("http://localhost:8080/reservation", reservation).pipe();
  }
  MettreAjour(id: number, reservation: Reservation) {
    return this.http.put( "http://localhost:8080/reservation/"+id,reservation).pipe();
  }
  supprimer(id: number) {
    return this.http.delete("http://localhost:8080/reservation/" + id).pipe()

  }
}

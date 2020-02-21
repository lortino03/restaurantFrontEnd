import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  newResa: Reservation= new Reservation();


  constructor(private reservationService: ReservationService, private route: Router) { }

  ngOnInit() {

  }

  ReserverTable(id:number){
   
    this.reservationService.ajouter(this.newResa).subscribe(
      data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre réservation a été enregistrée ',
          showConfirmButton: false,
          timer: 1500,
        })
        this.ngOnInit();
      });
    
  }
}

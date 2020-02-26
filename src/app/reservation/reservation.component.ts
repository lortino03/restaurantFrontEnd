import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Clients } from '../models/clients';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  newResa: Reservation = new Reservation();
  newclients: Clients=new Clients();
  idclients: number;
  nom: string;
  telephone: string;

  constructor(private reservationService: ReservationService,
    private clientsService: ClientsService, private route: ActivatedRoute) { 
      this.idclients=parseInt(this.route.snapshot.paramMap.get('idClients'))
     
    }

  ngOnInit() {
   

  }
  
  ReserverTable(id: number) {  
  this.reservationService.ajouter(this.newResa).subscribe(
  data => {
    this.newResa.nom=this.newclients.nom;
    this.newResa.telephone=this.newclients.telephone;
      this.clientsService.ajouter(this.newclients).subscribe(
      data=>{ 
       // this.newclients.idClients=this.newResa.clients.idClients;
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Votre réservation a été enregistrée ',
        showConfirmButton: false,
        timer: 1500,
      })
      this.ngOnInit();
      }
    )
   
    
  }

);
}
}

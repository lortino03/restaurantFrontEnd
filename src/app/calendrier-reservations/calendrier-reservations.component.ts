import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import Swal from 'sweetalert2'
import { Tables } from '../models/tables';
import { TablesService } from '../services/tables.service';
declare var $: any;




@Component({
  selector: 'app-calendrier-reservations',
  templateUrl: './calendrier-reservations.component.html',
  styleUrls: ['./calendrier-reservations.component.css']
})
export class CalendrierReservationsComponent implements OnInit {

 ListeReservation:Reservation[]=[];
 listTables: Tables[]=[];
 newtables:Tables=new Tables();
 idTable:number;

  constructor(private reservationServvice: ReservationService,private tableService: TablesService,private route:ActivatedRoute) { 
    this.idTable=parseInt(this.route.snapshot.paramMap.get('idTables'))
  }

  ngOnInit() {
    this.reservationServvice.ToutAfficher().subscribe(
      data=>{
        this.ListeReservation=data;
        console.log(data)
        this.tableService.RecupUn(this.idTable).subscribe(
          data=>{
            this.newtables=data;
            console.log(data);
          }
        )
      });
      $(document).ready(function () {
        $("#myInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
  }
  SupprimerReservation(id: number) {
    Swal.fire({
      icon: 'error',
      title: 'Desolé...',
      text: 'Ce client ne peux etre supprimé!',
      footer: '<a href>Why do I have this issue?</a>'
    })
    Swal.fire({
      title: 'Etes vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, continuer!'
    }).then((result) => {
      if (result.value) {
        this.reservationServvice.supprimer(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'La reservation a été supprimé.',
              'success'
            )
            this.ngOnInit();
          }
        );

      }
    })
  }
 

}

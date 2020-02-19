import { Component, OnInit } from '@angular/core';
import { Clients } from '../models/clients';
import { ClientsService } from '../services/clients.service';
import Swal from 'sweetalert2'
declare var $:any;

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  listClients: Clients []=[];

  constructor(private clientsService:ClientsService) { }

  ngOnInit() {
    this.clientsService.ToutAfficher().subscribe(
      data=>{
        console.log(this.listClients);
        this.listClients=data;
      }
    );
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }
SupprimerClient(id:number){
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
      this.clientsService.supprimer(id).subscribe(
        data => {
          Swal.fire(
            'Supprimé!',
            'Le fichier a été supprimé.',
            'success'
          )
          this.ngOnInit();
        }
      );

    }
  })
}
}

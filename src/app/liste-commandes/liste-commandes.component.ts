import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/commande';
import Swal from 'sweetalert2'
import { Plats } from '../models/plats';
import { PlatsService } from '../services/plats.service';
declare var $: any;


@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
  listCommande: Commande[] = [];
  lisPlat: Plats[]=[];

  constructor(private commandeService: CommandeService, private platsService:PlatsService) { }

  ngOnInit() {
    this.commandeService.ToutAfficher().subscribe(
      data => {
        this.listCommande = data;
        console.log(data);
        this.platsService.ToutAfficher().subscribe(
          data=>{
            this.lisPlat=data;
            console.log(data)
          }
        )
      }
    );
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }

  SupprimerCommande(id: number) {
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
        this.commandeService.supprimer(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'La commande a été supprimée.',
              'success'
            )
            this.ngOnInit();
          }
        );

      }
    })

  }
}

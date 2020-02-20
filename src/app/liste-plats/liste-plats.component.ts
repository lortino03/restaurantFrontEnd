import { Component, OnInit } from '@angular/core';
import { Plats } from '../models/plats';
import { PlatsService } from '../services/plats.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
declare var $:any;

@Component({
  selector: 'app-liste-plats',
  templateUrl: './liste-plats.component.html',
  styleUrls: ['./liste-plats.component.css']
})
export class ListePlatsComponent implements OnInit {
  ListePlats: Plats[]=[];


  constructor(private platsService: PlatsService) { }

  ngOnInit() {
    this.platsService.ToutAfficher().subscribe(
      data=>{
        this.ListePlats=data;
        console.log(data)
      });
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
  }
  SupprimerPlats(id:number){
    Swal.fire({
      icon: 'error',
      title: 'Desolé...',
      text: 'Ce plats ne peux etre supprimé!',
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
        this.platsService.supprimer(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'le plats a été retiré du menu.',
              'success'
            )
            this.ngOnInit();
          }
        );
  
      }
    })
  }
}


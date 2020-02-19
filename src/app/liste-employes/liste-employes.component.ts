import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
declare var $:any;

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit {
listEmployes: Employes[]=[];
  constructor(private employesService:EmployesService) { }

  ngOnInit() {
    this.employesService.ToutAfficher().subscribe(
      data=>{
        this.listEmployes=data;
        console.log(data);

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


  SupprimerEmployes(id:number){
    Swal.fire({
      icon: 'error',
      title: 'Desolé...',
      text: 'Cet employé ne peux etre supprimé!',
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
        this.employesService.supprimer(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'employé a été viré ahahaha.',
              'success'
            )
            this.ngOnInit();
          }
        );
  
      }
    })
  }
}

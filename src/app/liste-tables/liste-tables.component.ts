import { Component, OnInit } from '@angular/core';
import { Tables } from '../models/tables';
import { TablesService } from '../services/tables.service';
import Swal from 'sweetalert2'
declare var $:any;

@Component({
  selector: 'app-liste-tables',
  templateUrl: './liste-tables.component.html',
  styleUrls: ['./liste-tables.component.css']
})
export class ListeTablesComponent implements OnInit {
  listeTables: Tables[]=[];


  constructor(private tablesService: TablesService) { }

  ngOnInit() {
    this.tablesService.ToutAfficher().subscribe(
      data=>{
        this.listeTables=data;
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

  SupprimerTables(id:number){
    Swal.fire({
      icon: 'error',
      title: 'Desolé...',
      text: 'Cette table ne peux etre supprimé!',
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
        this.tablesService.supprimer(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'la table a été retiré de la liste',
              'success'
            )
            this.ngOnInit();}
        );
  
      }
    })
  }
}

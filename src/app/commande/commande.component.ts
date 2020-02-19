import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { Tables } from '../models/tables';
import { CommandeService } from '../services/commande.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TablesService } from '../services/tables.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  newCommande: Commande = new Commande();
  newTable: Tables = new Tables();
  idTable: number;
  table: Tables;
  listTables:Tables []=[];
  constructor(private commandeService: CommandeService, private route: ActivatedRoute, private tableService: TablesService) {
    this.idTable = parseInt(this.route.snapshot.paramMap.get("idTables"))
  }

  ngOnInit() {
    this.tableService.ToutAfficher().subscribe(
      data=>{
        this.listTables=data;
        console.log(data)
      }
    )

  }

  AjouterCommande(){
    this.tableService.RecupUn(this.idTable).subscribe(
      data=>{
        this.table=data;
        console.log(this.table)
        this.newCommande.tables=this.table
        this.commandeService.ajouter(this.newCommande).subscribe(
          data=>{
            console.log(data)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'commande ajoutée avec succès',
              showConfirmButton: false,
              timer: 1500
            })
          }
        )
      }
    )
  }

}

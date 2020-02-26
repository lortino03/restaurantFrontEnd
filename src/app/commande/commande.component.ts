import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { Tables } from '../models/tables';
import { CommandeService } from '../services/commande.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TablesService } from '../services/tables.service';
import Swal from 'sweetalert2'
import { Plats } from '../models/plats';
import { PlatsService } from '../services/plats.service';

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
  newPlats: Plats=new Plats();
  ListePlats:Plats[]=[];
  idPlat:number;
  
  constructor(private commandeService: CommandeService, private route: ActivatedRoute,private platService:PlatsService,
     private tableService: TablesService) {
    this.idTable = parseInt(this.route.snapshot.paramMap.get("idTables"))
    this.idPlat=parseInt(this.route.snapshot.paramMap.get('idPlats'))
  }

  ngOnInit() {
    this.tableService.ToutAfficher().subscribe(
      data=>{
        this.listTables=data;
        console.log(data)
      });
      this.platService.ToutAfficher().subscribe(
        data=>{
          this.ListePlats=data;
          console.log(data)
        }
      )
  }

  AjouterCommande(){
    this.platService.RecupUn(this.idPlat).subscribe(
      data=>{
        this.newPlats=data;
        this.newCommande.plats=this.newPlats;
        console.log(data)
        this.tableService.RecupUn(this.idTable).subscribe(
          data=>{
            this.newTable=data;
            this.newCommande.tables=this.newTable;
            console.log(data)
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
    )
   
  }

}

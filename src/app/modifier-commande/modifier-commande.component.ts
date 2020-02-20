import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Tables } from '../models/tables';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-modifier-commande',
  templateUrl: './modifier-commande.component.html',
  styleUrls: ['./modifier-commande.component.css']
})
export class ModifierCommandeComponent implements OnInit {
  idcommande:number
  modifCommande: Commande=new Commande();
  listTables:Tables[]=[];
  table: Tables;
  idTable:number;

  constructor(private commandeService: CommandeService,private tablesService: TablesService,
    private route: ActivatedRoute) {
      this.idcommande=parseInt(this.route.snapshot.paramMap.get('idCommande'))
      this.idTable=parseInt(this.route.snapshot.paramMap.get('idTables'))
     }

  ngOnInit() {
    this.commandeService.RecupUn(this.idcommande).subscribe(
      data=>{
        console.log(data)
        this.modifCommande=data;
      }
    )
    this.tablesService.ToutAfficher().subscribe(
      data=>{
        this.listTables=data;
      }
    )
    
  }
  ModifierCommande() {
    this.tablesService.RecupUn(this.idTable).subscribe(
      data=>{
        this.table=data;
        console.log(data);
        this.modifCommande.tables=this.table;
        console.log(this.modifCommande)
        this.commandeService.MettreAjour(this.idcommande, this.modifCommande).subscribe(
          data => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Les informations du clients ont modifiée avec succès',
              showConfirmButton: false,
              timer: 1500
            });
          }
        )
      }
    )
 
  }
}

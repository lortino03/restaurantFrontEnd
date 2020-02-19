import { Component, OnInit } from '@angular/core';
import { Plats } from '../models/plats';
import { Commande } from '../models/commande';
import { PlatsService } from '../services/plats.service';
import { CommandeService } from '../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  newPlat: Plats=new Plats();
  newCommande:Commande=new Commande();
  listCommande: Commande []=[];
  idcommande:number;

  constructor(private platsService: PlatsService, private commandeService:CommandeService,
    private route: ActivatedRoute) { 
      this.idcommande=parseInt(this.route.snapshot.paramMap.get('idCommande'))
    }

  ngOnInit() {
    this.commandeService.ToutAfficher().subscribe(
      data =>{
        this.listCommande=data;
        console.log(data)
      }
    )
  }
  AjouterPlats(){
    this.commandeService.RecupUn(this.idcommande).subscribe(
      data=>{
        this.newCommande=data;
        this.newPlat.commande=this.newCommande;
        console.log(data)
        this.platsService.ajouter(this.newPlat).subscribe(
          data=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'nouveau plats ajouté avec succès',
              showConfirmButton: false,
              timer: 1500,
            })
            this.ngOnInit();
          }
        )
      }
    )
  }

}

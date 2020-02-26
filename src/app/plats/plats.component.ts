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
  newPlat: Plats = new Plats();

  constructor(private platsService: PlatsService,
    private route: ActivatedRoute) {}

  ngOnInit() {

  }

  AjouterPlats() {
    this.platsService.ajouter(this.newPlat).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'nouveau plats ajouté avec succès',
          showConfirmButton: false,
          timer: 1500,
        })
        console.log(this.newPlat)
        this.ngOnInit();
      }
    )


  }

}

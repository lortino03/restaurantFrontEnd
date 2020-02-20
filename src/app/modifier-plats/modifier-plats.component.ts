import { Component, OnInit } from '@angular/core';
import { Plats } from '../models/plats';
import { PlatsService } from '../services/plats.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modifier-plats',
  templateUrl: './modifier-plats.component.html',
  styleUrls: ['./modifier-plats.component.css']
})
export class ModifierPlatsComponent implements OnInit {

    idplats: number;
    modifPlats:Plats=new Plats();

  constructor(private platsService: PlatsService, private route:ActivatedRoute) {
    this.idplats=parseInt(this.route.snapshot.paramMap.get('idPlats'))
   }

  ngOnInit() {
    this.platsService.RecupUn(this.idplats).subscribe(
      data=>{
        this.modifPlats=data;
        console.log(data);
      }
    )
  }
  ModifierPlats() {
    
    this.platsService.MettreAjour(this.idplats, this.modifPlats).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Les informations du plats ont modifiée avec succès',
          showConfirmButton: false,
          timer: 1500
        });
       this.ngOnInit();
      }
    )
  }
}

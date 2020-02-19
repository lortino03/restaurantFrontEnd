import { Component, OnInit } from '@angular/core';
import { Clients } from '../models/clients';
import { ClientsService } from '../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-modifier-clients',
  templateUrl: './modifier-clients.component.html',
  styleUrls: ['./modifier-clients.component.css']
})
export class ModifierClientsComponent implements OnInit {
  idclient: number;
  modifierClient: Clients = new Clients();
  
  constructor(private clientService: ClientsService, private route: ActivatedRoute) {
    this.idclient = parseInt(this.route.snapshot.paramMap.get('idClients'))
  }

  ngOnInit() {
    this.clientService.RecupUn(this.idclient).subscribe(
      data => {
        console.log(data)
        this.modifierClient = data;
      }
    )
  }
  ModifierClients() {
    this.clientService.MettreAjour(this.idclient, this.modifierClient).subscribe(
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
}

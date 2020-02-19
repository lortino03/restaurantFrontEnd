import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Router } from '@angular/router';
import { Clients } from '../models/clients';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  newClients :Clients =new Clients();

  constructor(private clientsService:ClientsService,private route: Router) { }

  ngOnInit() {
  }

  AjouterClient(){
    console.log(this.newClients);
    this.clientsService.ajouter(this.newClients).subscribe(
      data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Auteur ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
        this.ngOnInit()
      }
    )
  }
}

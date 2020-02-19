import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  newEmployes: Employes=new Employes();


  constructor( private employesService:EmployesService, private route: Router) { }

  ngOnInit() {
  }

  AjouterServeur(){
    console.log(this.newEmployes)
    this.employesService.ajouter(this.newEmployes).subscribe(
      data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Auteur ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })

      }
    )

  }
}

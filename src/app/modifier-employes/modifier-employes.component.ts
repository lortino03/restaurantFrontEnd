import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-employes',
  templateUrl: './modifier-employes.component.html',
  styleUrls: ['./modifier-employes.component.css']
})
export class ModifierEmployesComponent implements OnInit {
  idemploye:number;
  modifEmployes:Employes=new Employes();

  constructor(private employeService: EmployesService, private route: ActivatedRoute) {
    this.idemploye=parseInt(this.route.snapshot.paramMap.get('idEmploye'))
   }

  ngOnInit() {
    this.employeService.RecupUn(this.idemploye).subscribe(
      data=>{
        console.log(data);
        this.modifEmployes=data;
      
      }
    )
  }
  ModifierEmployes() {
    console.log(this.modifEmployes)
    this.employeService.MettreAjour(this.idemploye, this.modifEmployes).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Les informations de l employé ont modifiée avec succès',
          showConfirmButton: false,
          timer: 1500
        });
        this.ngOnInit();
      }
    )
  }
}

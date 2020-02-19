import { Component, OnInit } from '@angular/core';
import { Tables } from '../models/tables';
import { Employes } from '../models/employes';
import { TablesService } from '../services/tables.service';
import { EmployesService } from '../services/employes.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  newTable: Tables= new Tables();
  newEmployes:Employes=new Employes();
  listEmployes: Employes[]=[];
  idEmploye: number;

  constructor(private tableService:TablesService, private employesService:EmployesService, private route:ActivatedRoute) { 
    this.idEmploye=parseInt(this.route.snapshot.paramMap.get('idTables'))
  }

  ngOnInit() {
    this.employesService.ToutAfficher().subscribe(
    data=>{
      this.listEmployes=data;
      console.log(data);
    }
    )
  }
AjouterTables(){
  this.employesService.RecupUn(this.idEmploye).subscribe(
    data=>{
      this.newEmployes=data;
      this.newTable.employes=this.newEmployes;
      console.log(data)
      this.tableService.ajouter(this.newTable).subscribe(
        data=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Table ajoutée avec succès',
            showConfirmButton: false,
            timer: 1500
          })
          this.ngOnInit();
        }
      );
    }
  )
}
}

import { Component, OnInit } from '@angular/core';
import { Tables } from '../models/tables';
import { TablesService } from '../services/tables.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';

@Component({
  selector: 'app-modifier-tables',
  templateUrl: './modifier-tables.component.html',
  styleUrls: ['./modifier-tables.component.css']
})
export class ModifierTablesComponent implements OnInit {
    idtable:number
    modifTable:Tables=new Tables();
    listeEmployes:Employes[]=[];
    idemploye:number;
    employe: Employes;

  constructor(private tablesService:TablesService, private employesService: EmployesService,private route: ActivatedRoute ) { 
    this.idtable=parseInt(this.route.snapshot.paramMap.get('idTables'))
    this.idemploye=parseInt(this.route.snapshot.paramMap.get('idEmploye'))
  }

  ngOnInit() {
    this.tablesService.RecupUn(this.idtable).subscribe(
      data=>{
        this.modifTable=data;
        console.log(data)
      });
      this.employesService.RecupUn(this.idemploye).subscribe(
        data=>{
          this.modifTable.employes=this.employe;
        }
       
      )
  }
  ModifierTables() {
    console.log(this.modifTable)
    this.tablesService.MettreAjour(this.idtable, this.modifTable).subscribe(
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

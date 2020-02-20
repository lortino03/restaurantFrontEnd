import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  newEmployes: Employes=new Employes();
  login: any;
  pwd: any;
  constructor(private employesService: EmployesService, private route:Router) { }

  ngOnInit() {
    this.employesService.ToutAfficher().subscribe(
      data=>{

      }
    )
  }

  
  Seconnecter() {

    this.employesService.getByLogin(this.newEmployes).subscribe(
      data => {
        this.newEmployes.login=data;
        this.newEmployes.pwd=data;
        if (data == true) {
          localStorage.setItem("login",data["login"])
          localStorage.setItem("pwd",data["pwd"])
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Connexion reussie!',
          
            timer: 1500
          }).then (function(){
            window.location.href="/home";
          })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'pwd ou login incorrect!',
            footer: '<a href>Why do I have this issue?</a>'
          }).then (function(){
            window.location.href="/utilisateurs";
          })
        }
      }
    );
  }
}

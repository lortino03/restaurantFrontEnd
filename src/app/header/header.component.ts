import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { JwtHelperService } from "@auth0/angular-jwt";
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newEmploye: Employes=new Employes();
  vartoken;
  Helper = new JwtHelperService();
  condition: boolean;
  decodeToken :Employes=new Employes;
  showAdmin:boolean=false;

  constructor(private router:Router) {
    
    router.events.forEach(
      event => {
        if (event instanceof NavigationStart) {
          console.log(event['url'])

          if (localStorage.getItem("token")) {
            this.condition = true;
          } else {
            this.condition = false;
          }
        }
      }
    )
   }

  ngOnInit() {
    this.vartoken = localStorage.getItem("token")
    //  Decode ces données et je les mets dans mon new utilisateur
    this.newEmploye = this.Helper.decodeToken(this.vartoken);
    if(this.vartoken.status=="Manager"){
      this.showAdmin=true;
    }  
  }

  logout() {
    localStorage.removeItem("token");
    window.location.href="/home"
  }

}

import { Component, OnInit } from '@angular/core';
import { Employes } from '../models/employes';
import { JwtHelperService } from "@auth0/angular-jwt";
import { NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { EmployesService } from '../services/employes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  condition: Boolean;
  condition2: Boolean;
  condition3: Boolean;
  idEmploye: number;
  newEmploye: Employes = new Employes();
  vartoken;
  helper = new JwtHelperService();
  decodedToken;
  type;

  constructor(private employesService: EmployesService,
    private router: Router, private route: ActivatedRoute) {
    router.events.forEach(
      event => {
        this.vartoken = this.helper.decodeToken(localStorage.getItem('token'));
        if (event instanceof NavigationStart) {
          if (localStorage.length == 0) {
            this.condition = false;
          } else {
            this.condition = true;
          }
        }
      })
      
    router.events.forEach(
      event => {
        this.vartoken = this.helper.decodeToken(localStorage.getItem('token'));
        if (event instanceof NavigationStart) {
          if (this.vartoken.status == "Manager") {
            this.condition2 = true;
          } else {
            this.condition2 = false;
          }
        }
      }
    )

    router.events.forEach(
      event => {
        this.vartoken = this.helper.decodeToken(localStorage.getItem('token'));
        if (event instanceof NavigationStart) {
          if (this.vartoken.status == "Serveur") {
            this.condition3 = true;
          } else {
            this.condition3 = false;
          }
        }
      }
    )

  }
  ngOnInit() {
    this.vartoken = this.helper.decodeToken(localStorage.getItem('token'));

  }

  logout() {
    localStorage.removeItem("token");
    window.location.href = "/home"
  }

}

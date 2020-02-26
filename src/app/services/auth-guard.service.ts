import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }
  canActivate() {   // on utilsera le token pour voir si l'utilisateur est connecté ou pas
    if (localStorage.getItem("token")) {
      return true;
    }
    // on peut le rediriger vers une page précise
    Swal.fire({
      icon: 'error',
      title: 'Acces refusé...',
      text: 'Veuillez vous connecter SVP!',
      footer: '<a href>Why do I have this issue?</a>'
    }).then(function () {
      window.location.href = "/connexion";
    })
    this.router.navigate(['/connexion'])
    return false;
  }
}

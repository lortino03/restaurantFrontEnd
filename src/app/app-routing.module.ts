import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { CommandeComponent } from './commande/commande.component';
import { PlatsComponent } from './plats/plats.component';
import { EmployesComponent } from './employes/employes.component';
import { TablesComponent } from './tables/tables.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { ModifierClientsComponent } from './modifier-clients/modifier-clients.component';
import { ModifierEmployesComponent } from './modifier-employes/modifier-employes.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { ModifierTablesComponent } from './modifier-tables/modifier-tables.component';
import { ListePlatsComponent } from './liste-plats/liste-plats.component';
import { ModifierPlatsComponent } from './modifier-plats/modifier-plats.component';
import { HomeComponent } from './home/home.component';
import { ListeTablesComponent } from './liste-tables/liste-tables.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CalendrierReservationsComponent } from './calendrier-reservations/calendrier-reservations.component';
import { MenuComponent } from './menu/menu.component';
import{AuthGuardService} from './services/auth-guard.service' 


const routes: Routes = [
  {
    path:"clients",
    component:ClientsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"home",
    component:HomeComponent

  },
  {
    path:"commande",
    component:CommandeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"plats",
    component:PlatsComponent
  },
  {
    path:"employes",
    component:EmployesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: "tables",
    component:TablesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: "reservation",
    component:ReservationComponent
  },
  {
    path: "liste-clients",
    component:ListeClientsComponent,
    canActivate:[AuthGuardService]
  }
  ,{
    path:"liste-employes",
    component:ListeEmployesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"liste-commandes",
    component:ListeCommandesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"modifier-clients/:idClients", // toujours ecrire l'id comme dans postman
    component:ModifierClientsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"modifier-employes/:idEmploye", // toujours ecrire l'id comme dans postman
    component:ModifierEmployesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"modifier-commande/:idCommande", // toujours ecrire l'id comme dans postman
    component:ModifierCommandeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"modifier-plats/:idPlats", // toujours ecrire l'id comme dans postman
    component:ModifierPlatsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"modifier-tables/:idTable", // toujours ecrire l'id comme dans postman
    component: ModifierTablesComponent,
    canActivate:[AuthGuardService]
  },
  
  {
    path:"liste-plats",
    component:ListePlatsComponent
  },
  {
    path:"liste-tables",
    component:ListeTablesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"connexion",
    component:ConnexionComponent
  },
  {
    path:"calendrier-reservations",
    component:CalendrierReservationsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"menu",
    component:MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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


const routes: Routes = [
  {
    path:"clients",
    component:ClientsComponent
  },
  {
    path:"home",
    component:HomeComponent

  },
  {
    path:"commande",
    component:CommandeComponent
  },
  {
    path:"plats",
    component:PlatsComponent
  },
  {
    path:"employes",
    component:EmployesComponent
  },
  {
    path: "tables",
    component:TablesComponent
  },
  {
    path: "reservation",
    component:ReservationComponent
  },
  {
    path: "liste-clients",
    component:ListeClientsComponent
  }
  ,{
    path:"liste-employes",
    component:ListeEmployesComponent
  },
  {
    path:"liste-commandes",
    component:ListeCommandesComponent
  },
  {
    path:"modifier-clients/:idClients", // toujours ecrire l'id comme dans postman
    component:ModifierClientsComponent
  },
  {
    path:"modifier-employes/:idEmploye", // toujours ecrire l'id comme dans postman
    component:ModifierEmployesComponent
  },
  {
    path:"modifier-commande/:idCommande", // toujours ecrire l'id comme dans postman
    component:ModifierCommandeComponent
  },
  {
    path:"modifier-plats/:idPlats", // toujours ecrire l'id comme dans postman
    component:ModifierPlatsComponent
  },
  {
    path:"modifier-tables/:idTables", // toujours ecrire l'id comme dans postman
    component: ModifierTablesComponent
  },
  {
    path:"liste-plats",
    component:ListePlatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

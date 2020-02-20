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


const routes: Routes = [
  {
    path:"clients",
    component:ClientsComponent
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
    path:"modifier-clients/:idClients",
    component:ModifierClientsComponent
  },
  {
    path:"modifier-employes/:idEmploye",
    component:ModifierEmployesComponent
  },
  {
    path:"modifier-commande/:idCommande",
    component:ModifierCommandeComponent
  },
  {
    path:"modifier-tables/:idTables",
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

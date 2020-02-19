import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { CommandeComponent } from './commande/commande.component';
import { PlatsComponent } from './plats/plats.component';
import { EmployesComponent } from './employes/employes.component';
import { TablesComponent } from './tables/tables.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

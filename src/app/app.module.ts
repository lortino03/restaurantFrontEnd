import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { ClientsComponent } from './clients/clients.component';
import { TablesComponent } from './tables/tables.component';
import { EmployesComponent } from './employes/employes.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PlatsComponent } from './plats/plats.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    ClientsComponent,
    TablesComponent,
    EmployesComponent,
    ReservationComponent,
    PlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

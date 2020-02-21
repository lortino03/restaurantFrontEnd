import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { ClientsComponent } from './clients/clients.component';
import { TablesComponent } from './tables/tables.component';
import { EmployesComponent } from './employes/employes.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PlatsComponent } from './plats/plats.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ManagementComponent } from './management/management.component';
import{FormsModule} from '@angular/forms';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { ModifierEmployesComponent } from './modifier-employes/modifier-employes.component';
import { ModifierClientsComponent } from './modifier-clients/modifier-clients.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { ModifierTablesComponent } from './modifier-tables/modifier-tables.component';
import { ListePlatsComponent } from './liste-plats/liste-plats.component';
import { ModifierPlatsComponent } from './modifier-plats/modifier-plats.component';
import { ListeTablesComponent } from './liste-tables/liste-tables.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CalendrierReservationsComponent } from './calendrier-reservations/calendrier-reservations.component'

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    ClientsComponent,
    TablesComponent,
    EmployesComponent,
    ReservationComponent,
    PlatsComponent,
    HomeComponent,
    HeaderComponent,
    ManagementComponent,
    ListeClientsComponent,
    ListeEmployesComponent,
    ModifierEmployesComponent,
    ModifierClientsComponent,
    ListeCommandesComponent,
    ModifierCommandeComponent,
    ModifierTablesComponent,
    ListePlatsComponent,
    ModifierPlatsComponent,
    ListeTablesComponent,
    ConnexionComponent,
    CalendrierReservationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

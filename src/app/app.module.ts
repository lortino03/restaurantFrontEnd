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
import{FormsModule} from '@angular/forms'

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
    ManagementComponent
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

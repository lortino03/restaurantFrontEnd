import { Clients } from './clients';
import { Tables } from './tables';

export class Reservation{
    idReservation:number;
    dateDeResa:Date;
    clients:Clients;
    tables: Tables;
}
import { Clients } from './clients';
import { Tables } from './tables';

export class Reservation{
    idReservation:number;
    nom:String;
    telephone:string;
    NbrePersonne: number;
    dateDeResa:Date;
    heure:any;
    clients:Clients
    tables:Tables
 
}
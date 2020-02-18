import { Tables } from './tables';

export class Commande{
    idCommande:number;
    dateDeCommande: Date;
    plats:String;
    prix: number;
    tables:Tables;
}
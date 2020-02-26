import { Tables } from './tables';
import { Plats } from './plats';

export class Commande{
    idCommande:number;
    dateDeCommande: Date;
    tables:Tables;
    plats:Plats
    quantite:number;
}
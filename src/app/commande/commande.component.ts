import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',  
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  newCommande:Commande=new Commande();
  constructor() { }

  ngOnInit() {
  }

}

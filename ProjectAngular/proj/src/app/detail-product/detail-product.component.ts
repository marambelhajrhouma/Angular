import { Component , OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent  implements OnInit{
  id!: number;
  
 //
 /*donne des info à la route qui est déjà en cours on fait l'importer de la biblio*/
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    /*permet d'envoyer des donées d'un composant à un autre*/
    this.id=this.route.snapshot.params['id'];
  
  }
  
}
import { Component, OnInit , Input,Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() listProducts: Product[] = []; 
  @Output() incrementEventLike= new EventEmitter<Product>(); //EventEmitter permet d'emettre des valeurs
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<Product>();
  @Input() isEditing: boolean = false;

  // Declare editedProduct
  editedProduct: Product = {
    id: 0,
    title: '',
    price: 0,
    quantity: 0,
    like: 0,
    imageUrl: '',
  };
  //
  constructor(){}

  //
  ngOnInit():void{

  }

  sendNotif(){
    this.incrementEventLike.emit(this.product); //emit() permet de rementer les valeurs au composants parent
  }

  sendNotifDelete(){
    this.deleteEvent.emit(this.product.id);

  }

  startEdit() {
    this.editedProduct = { ...this.product }; // Retain the original ID
    this.isEditing = true;
  }

  cancelEdit() {
    // Reset the edited product to the original state
    this.editedProduct = { ...this.product };
    this.isEditing = false;
  }

  saveEdit() {
    this.isEditing = false;
    this.editEvent.emit(this.editedProduct);
  }
  
}

import { Component,OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductDataService } from '../product-data.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{
  product: Product = new Product();

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.product = new Product();
  }

  save(): void {
    this.product.like = 0;

    this.productDataService.currentProductList.pipe(
      // Take 1 to unsubscribe after the first emission
      take(1),
      tap(products => {
        // Assigning an auto-incremented id based on the length of the existing product list
        this.product.id = products.length + 1;
      })
    ).subscribe(() => {
      this.productDataService.addProduct(this.product);
      console.log('after the click');
      console.log(this.productDataService.currentProductList);
      this.product = new Product(); // Clear the form
    });
  }

  // Gérez le changement d'image
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Utilisez FileReader pour convertir l'image en base64
      const reader = new FileReader();
      reader.onloadend = () => {
        this.product.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
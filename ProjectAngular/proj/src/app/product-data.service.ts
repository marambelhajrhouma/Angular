import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of  } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private productListSource = new BehaviorSubject<Product[]>([]);
  currentProductList = this.productListSource.asObservable();

  addProduct(product: Product) {
    const currentList = this.productListSource.value;
    this.productListSource.next([...currentList, product]);
  }

  deleteProduct(productId: number) {
    const currentList = this.productListSource.value;
    const updatedList = currentList.filter(product => product.id !== productId);
    this.productListSource.next(updatedList);
  }

  editProduct(editedProduct: Product): Observable<Product> {
    const currentList = this.productListSource.value;
    const updatedList = currentList.map(product => {
      if (product.id === editedProduct.id) {
        return { ...product, ...editedProduct };
      }
      return product;
    });
    this.productListSource.next(updatedList);
    
    // Assuming your data source returns the updated product
    return of(editedProduct);
  }


}

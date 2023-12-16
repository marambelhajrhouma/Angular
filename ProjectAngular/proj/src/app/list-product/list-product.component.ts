import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../models/product';
import { CalculService } from '../calcul.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit  {
  listProducts: Product[]=[];
  alertStock!: number; //elle est déjà initialiser on met !
  selectedProductId: number | null = null;
  searchTerm: string = '';
  //
  constructor(private cdr: ChangeDetectorRef,private serviceCal: CalculService,private productDataService: ProductDataService){}
  
  //
  ngOnInit(): void {
    this.productDataService.currentProductList.subscribe(products => {
      this.listProducts = products;
      this.cdr.detectChanges();
    });
  }

  incrementLike(p: Product) {
    let i = this.listProducts.indexOf(p);
    this.listProducts[i].like++;
  }

  getAlertStock() {
    this.alertStock = this.serviceCal.getNumberOf(this.listProducts, 'quantity', 0);
  }
  showAlert(): void {
    alert('Stock is low!');
  }

  deleteProduct(productId: number) {
    this.productDataService.deleteProduct(productId);
  }

  onEditProduct(editedProduct: Product) {
    // Update the product in your data source (e.g., a service or API)
    this.productDataService.editProduct(editedProduct).subscribe(
      (updatedProduct: Product) => {
        // Assuming your data source returns the updated product
        console.log('Product updated:', updatedProduct);

        // Update the component's list
        const index = this.listProducts.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          // Create a new array to trigger change detection
          this.listProducts = [...this.listProducts.slice(0, index), updatedProduct, ...this.listProducts.slice(index + 1)];
          this.cdr.detectChanges(); // Manually trigger change detection
        }
      },
      (error) => {
        console.error('Error updating product:', error);
        // Handle error as needed
      }
    );
  }

  searchProducts() {
    // Implement search logic based on the searchTerm
    if (this.searchTerm.trim() !== '') {
      this.listProducts = this.listProducts.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // If search term is empty, show all products
      this.productDataService.currentProductList.subscribe(products => {
        this.listProducts = products;
        this.cdr.detectChanges();
      });
    }
  }
  
 
}

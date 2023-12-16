// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductDataService } from './product-data.service';
import { DetailProductComponent } from './detail-product/detail-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductComponent,
    NotFoundComponent,
    FormProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// app.module.ts

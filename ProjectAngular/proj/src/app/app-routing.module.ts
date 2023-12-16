import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormProductComponent } from './form-product/form-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const ROUTES: Routes = [
  {path: 'proj/home', component: ListProductComponent}, 
  {path: 'proj/form-product', component: FormProductComponent},
  {path: 'proj/home/:id' , component: DetailProductComponent},
  {path: 'proj/**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

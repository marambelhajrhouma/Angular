import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router'; // Importez RouterModule

@NgModule({
  declarations: [AppComponent, CarDetailComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule], // Ajoutez RouterModule ici
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

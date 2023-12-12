import { Injectable } from '@angular/core';
import { Avion } from '../app/model/avion';
import { HttpClient } from '@angular/core/httpClientModule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  urlApi: string = 'http://localhost:3000/avion' ;
  constructor(http: HttpClient) { }

  addAvion(data:any){
    this.urlApi.{$"/addAvion"};
    
  }

  delAvion(idAvion: number){
    this.urlApi.{$"/deleteAvion"}.{$"/id"};
  }
}

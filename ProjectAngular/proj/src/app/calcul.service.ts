import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  //parcourir une liste et retourner un nbre
  getNumberOf(list: any[], critiria: string,value: any){
    let n=0;
    for(let i in list){
      if(list[i][critiria]===value){ // 2 = c.a.d type et value
          n++;
      }
    }
    return n;
  }
}

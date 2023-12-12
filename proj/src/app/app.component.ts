import { Component } from '@angular/core';
import { AvionService } from './avion.service';
import { Avion } from '../app/model/avion';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'avion';
  formValue: any;
  avion: Avion= new Avion();

  constructor(private avionService: AvionService) {}

  add(){
    this.avion.id= this.formValue.id;
    this.avion.marque= this.formValue.marque;
    this.avion.description= this.formValue.description;
    this.avion.date= this.formValue.date;
     
    this.urlApi.addAvion(data)(
      res => { console.log(data);
                alert("add succcefuly");
                this.formValue.reset();
      })
      err=> {
        alert("probleme");
      }

  }

 delete(){
    if(confirm('Are you sure to delete the avion?')){
      this.urlApi.delAvion(data.id)(
        res=> {
          this.formValue.reset();
          alert("delete succefully");
        }
      )
      err => {
        alert("problem");
      }
  }
}

edit(){
    this.avion.id= this.formValue.id;
    this.avion.marque= this.formValue.marque;
    this.avion.description= this.formValue.description;
    this.avion.date= this.formValue.date;
}
update(){

}
  
}

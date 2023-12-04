// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app-1';
  country: string = ' Turkey';

  modifyCountry() {
    const newCountry = prompt('Enter the new country:');
    
    if (newCountry !== null) {
      this.country = newCountry;
    }
  }
}


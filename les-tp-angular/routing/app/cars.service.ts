
import { Injectable } from '@angular/core';
import { Car } from './car'; // Import the Car model

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    new Car('car1', 2002, 'BMW', 'M3', 'https://en.wikipedia.org/wiki/BMW_M3'),
    new Car('car2', 2017, 'Acura', 'NSX', 'https://en.wikipedia.org/wiki/HONDA_NSX'),
    new Car('car3', 2016, 'Chevy', 'Camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
    // Add more cars as needed
  ];

  getCars(): Car[] {
    return this.cars;
  }

  getCarById(id: string): Car | undefined {
    return this.cars.find(car => car.id === id);
  }
}

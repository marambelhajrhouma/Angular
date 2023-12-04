import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  Car: Car | undefined; 

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const carId = params['id'];
      // Use the service to get the car by ID
      this.Car = this.carService.getCarById(carId);
    });
  }
}

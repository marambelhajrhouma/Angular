import { Component } from '@angular/core';
import { CATS } from "../mock-cats";
import { Cat } from '../cat';
import * as _ from 'lodash';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats = CATS;

  constructor() {}
}

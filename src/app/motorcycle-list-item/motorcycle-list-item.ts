import { Component, input } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';

@Component({
  imports: [],
  selector: 'app-motorcycle-list-item',
  styleUrl: './motorcycle-list-item.css',
  templateUrl: './motorcycle-list-item.html',
})
export class MotorcycleListItem {
  motorcycle = input.required<Motorcycle>();
}

import { Component, input, output } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';

export interface MotorcycleEvent {
  id: number;
  action: 'opened'| 'favourited'
;}
@Component({
  imports: [],
  selector: 'app-motorcycle-list-item',
  styleUrl: './motorcycle-list-item.css',
  templateUrl: './motorcycle-list-item.html',
})
export class MotorcycleListItem {
  motorcycle = input.required<Motorcycle>();

  motorcycleClicked = output<MotorcycleEvent>();

  openMotorcycle(): void {
    this.motorcycleClicked.emit({
      id: this.motorcycle().id,
      action: 'opened'
    });
  }
}

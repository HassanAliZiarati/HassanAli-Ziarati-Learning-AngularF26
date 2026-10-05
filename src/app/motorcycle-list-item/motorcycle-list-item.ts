import { Component, input, output } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';
import { MotorcycleEvent } from '../shared/models/motorcycle-event';

@Component({
  imports: [],
  selector: 'app-motorcycle-list-item',
  styleUrl: './motorcycle-list-item.css',
  templateUrl: './motorcycle-list-item.html',
})


export class MotorcycleListItem {

  //property that is receiving input from parent
  motorcycle = input.required<Motorcycle>();

  motorcycleClicked = output<MotorcycleEvent>();

  // Ready message to send from our method
  openMotorcycle(): void {
    this.motorcycleClicked.emit({
      id: this.motorcycle().id,
      action: 'opened'
    });
  }
}

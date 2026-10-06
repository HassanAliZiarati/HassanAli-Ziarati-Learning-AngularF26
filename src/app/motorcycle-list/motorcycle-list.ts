import { Component, inject } from '@angular/core';
import { Motorcycle } from '../shared/models/motorcycle';
import { MotorcycleListItem } from '../motorcycle-list-item/motorcycle-list-item';
import { MotorcycleEvent } from '../shared/models/motorcycle-event';
import { MotorcycleService} from '../services/motorcycle';

@Component({
  imports: [MotorcycleListItem],
  selector: 'app-motorcycle-list',
  styleUrl: './motorcycle-list.css',
  templateUrl: './motorcycle-list.html',
})

// Define array for our content
export class MotorcycleList {
  // Replaced with Motorcycle array item
  private motorcycleService = inject(MotorcycleService);

  motorcycleList = this.motorcycleService.motorcycleList;

  sportMotorcycle = this.motorcycleService.sportMotorcycles;

  // Console motorcycle click event
  onMotorcycleClicked(event: MotorcycleEvent) {
    console.log(event);
  }
}

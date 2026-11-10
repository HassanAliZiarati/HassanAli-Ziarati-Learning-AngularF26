import { Component, inject } from '@angular/core';
import { MotorcycleListItem } from '../motorcycle-list-item/motorcycle-list-item';
import { MotorcycleEvent } from '../shared/models/motorcycle-event';
import { MotorcycleService} from '../services/motorcycle';

@Component({
  imports: [MotorcycleListItem],
  selector: 'app-motorcycle-list',
  styleUrl: './motorcycle-list.css',
  templateUrl: './motorcycle-list.html',
})
export class MotorcycleList {
  // Replaced with Motorcycle array item
  private motorcycleService = inject(MotorcycleService);

  motorcycleList = this.motorcycleService.motorcycleList;

  isLoading = this.motorcycleService.isLoading;
  error = this.motorcycleService.error;

  filteredMotorcycles = this.motorcycleService.filteredMotorcycles;
  filteredMotorcycleCount = this.motorcycleService.filteredMotorcycleCount;

  // Console motorcycle click event
  onMotorcycleClicked(event: MotorcycleEvent) {
    console.log(event);
    // Remove the motorcycle
    this.motorcycleService.removeMotorcycle(event.id);
  }
}

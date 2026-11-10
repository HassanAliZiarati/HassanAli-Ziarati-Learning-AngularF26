import { Injectable, signal, computed, effect, inject } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';
import { MOTORCYCLE_CONFIG } from '../shared/config/motorcycle-config';


@Injectable()
export class MotorcycleService {
  private motorcycles = signal<Motorcycle[]>([]);

  private config = inject(MOTORCYCLE_CONFIG);

  readonly motorcycleList = this.motorcycles.asReadonly();

  // Creating add method to the array
  addMotorcycle(newMotorcycle: Motorcycle) {
    this.motorcycles.update((list) => [...list, newMotorcycle]);
  }

  // Filter motorcycle by category
  readonly filteredMotorcycles = computed(() =>
    this.motorcycles().filter(motorcycle => motorcycle.category === this.config.defaultCategory),
  );

  // Show the number of filtered list
  readonly filteredMotorcycleCount = computed(() => this.filteredMotorcycles().length);

  // count the motorcycle numbers
  constructor() {
    effect(() => {
      console.log('Motorcycle count:', this.motorcycles().length);
    });
  }

  // Delete motorcycle by click method
  removeMotorcycle(id: number): void {
    this.motorcycles.update((list) => list.filter((motorcycle) => motorcycle.id !== id));
  }

  // Find a motorcycle by its ID
  getMotorcycle(id: number): Motorcycle | undefined {
    return this.motorcycles().find((motorcycle) => motorcycle.id === id);
  }

  // Replace the motorcycle with the matching ID
  updateMotorcycle(updated: Motorcycle): void {
    this.motorcycles.update((list) =>
      list.map((motorcycle) => (motorcycle.id === updated.id ? updated : motorcycle)),
    );
  }

  // Create an ID above the highest current ID
  nextId(): number {
    return Math.max(0, ...this.motorcycles().map((motorcycle) => motorcycle.id)) + 1;
  }
}

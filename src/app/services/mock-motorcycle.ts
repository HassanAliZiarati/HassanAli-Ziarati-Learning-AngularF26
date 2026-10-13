import { Injectable, signal, computed, effect, inject } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';
import { MOTORCYCLE_CONFIG } from '../shared/config/motorcycle-config';


@Injectable()
export class MockMotorcycleService {
  private motorcycles = signal<Motorcycle[]>([
  { id: 101, brand: 'Test Honda', model: 'Fake CBR650R', engineCC: 649, hasABS: true, category: 'sport', image: 'images/CBR650.jpg'},
  { id: 102, brand: 'Test Yamaha', model: 'Fake MT-10', engineCC: 998, hasABS: true, category: 'naked', image: 'images/MT-10.jpg'},
  ]);

  private config = inject(MOTORCYCLE_CONFIG);

  readonly motorcycleList = this.motorcycles.asReadonly();

  // Creating add method to the array
  addMotorcycle(newMotorcycle: Motorcycle) {
    this.motorcycles.update(list => [...list, newMotorcycle]);
  }

  // Filter the list of Sport motorcycle
  readonly sportMotorcycles = computed(() =>

    this.motorcycles().filter(motorcycle => motorcycle.category === this.config.defaultCategory)
  );

  // Show the number of filtered list
  readonly sportMotorcycleCount = computed(() =>
    this.sportMotorcycles().length
  )

  // count the motorcycle numbers
  constructor() {
    effect(() => {
      console.log('Motorcycle count:', this.motorcycles().length);
    });
  }

  // Delete motorcycle by click method
  removeMotorcycle(id: number): void {
    this.motorcycles.update( list =>
    list.filter(motorcycle => motorcycle.id !== id)
    );
  }

}

import { Injectable, signal, computed, effect, inject } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';
import { MOTORCYCLE_CONFIG } from '../shared/config/motorcycle-config';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';


@Injectable()
export class MotorcycleService {
  private motorcycles = signal<Motorcycle[]>([]);

  private config = inject(MOTORCYCLE_CONFIG);
  private http = inject(HttpClient);
  // loading status
  readonly isLoading = signal(false);
  // Error message
  readonly error = signal<string | null>(null);

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
    this.loadMotorcycles();

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

  // Load motorcycles
  loadMotorcycles(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<{ products: Motorcycle[] }>(
      `${this.config.apiBaseUrl}/products/category/motorcycle`,
      {
        params: {limit: 5}
      }
    ).pipe(
      map(response => response.products)
    ).subscribe({
      next: motorcycles => {
        this.motorcycles.set(motorcycles);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set("Could not load motorcycles");
        this.isLoading.set(false)
      }
    });
  }
}

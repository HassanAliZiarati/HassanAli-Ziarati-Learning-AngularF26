import { Service, signal, computed, effect } from '@angular/core';
import {Motorcycle} from '../shared/models/motorcycle';
import { readonly } from '@angular/forms/signals';


@Service()
export class MotorcycleService {
  private motorcycles = signal<Motorcycle[]>([
  { id: 1, brand: 'Honda', model: 'CBR650R', engineCC: 649, hasABS: true, category: 'sport', image: 'images/CBR650.jpg'},
  { id: 2, brand: 'Yamaha', model: 'MT-10', engineCC: 998, hasABS: true, category: 'naked', image: 'images/MT-10.jpg'},
  { id: 3, brand: 'Kawasaki', model: 'H2R', engineCC: 998, hasABS: true, category: 'sport', image: 'images/H2R.jpg' },
  { id: 4, brand: 'BMW', model: 'S 1000 RR', engineCC: 1000, hasABS: true, category: 'sport', image: 'images/BMW S1000RR.jpg' },
  { id: 5, brand: 'Kawasaki', model: 'Z900RS SE', engineCC: 948, hasABS: true, category: 'naked', image: 'images/Z900RS.jpg' },
  { id: 6, brand: 'Suzuki', model: 'Boulevard M109R', engineCC: 1783, hasABS: false, category: 'cruiser', image: 'images/Suzuki.jpg' },
  ]);
  readonly motorcycleList = this.motorcycles.asReadonly();

  // Creating add method to the array
  addMotorcycle(newMotorcycle: Motorcycle) {
    this.motorcycles.update(list => [...list, newMotorcycle]);
  }

  readonly sportMotorcycles = computed(() =>
    this.motorcycles().filter(motorcycle => motorcycle.category === "sport")
  );

  // count the motorcycle numbers
  constructor() {
    effect(() => {
      console.log('Motorcycle count:', this.motorcycles().length);
    });
  }

}

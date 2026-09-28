import { Component } from '@angular/core';
import { Motorcycle } from '../shared/models/motorcycle';

@Component({
  imports: [],
  selector: 'app-motorcycle-list',
  styleUrl: './motorcycle-list.css',
  templateUrl: './motorcycle-list.html',
})
export class MotorcycleList {
  motorcycleList: Motorcycle[] = [
    { id: 1, brand: 'Honda', model: 'CBR650R', engineCC: 649, hasABS: true, category: 'sport' },
    { id: 2, brand: 'Yamaha', model: 'MT-10', engineCC: 998, hasABS: true, category: 'naked' },
    { id: 3, brand: 'Kawasaki', model: 'H2R', engineCC: 998, hasABS: true, category: 'sport' },
    { id: 4, brand: 'BMW', model: 'S 1000 RR', engineCC: 1000, hasABS: true, category: 'sport' },
    { id: 5, brand: 'Kawasaki', model: 'Z900RS SE', engineCC: 948, hasABS: true, category: 'naked', },
    { id: 6, brand: 'Suzuki', model: 'Boulevard M109R', engineCC: 1783, hasABS: false, category: 'cruiser', },
  ];
}

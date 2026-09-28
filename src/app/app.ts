import { Component, signal } from '@angular/core';
import { Motorcycle} from './shared/models/motorcycle';
import  {MotorcycleList} from './motorcycle-list/motorcycle-list';

@Component({
  imports: [MotorcycleList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  // Arrays Moved to motorcycle.ts
}



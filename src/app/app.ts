import { Component, signal } from '@angular/core';
import { Motorcycle} from './shared/models/motorcycle';
import  {MotorcycleList} from './motorcycle-list/motorcycle-list';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  // Arrays moved to motorcycle.ts
}



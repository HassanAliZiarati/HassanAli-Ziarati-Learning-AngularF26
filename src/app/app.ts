import { Component, signal, inject } from '@angular/core';
import { Motorcycle} from './shared/models/motorcycle';
import  {MotorcycleList} from './motorcycle-list/motorcycle-list';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { EditGuardService } from './services/edit-guard';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  // Get the guard service
  protected editGuardService = inject(EditGuardService);
}



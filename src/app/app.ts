import { Component, signal, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { EditGuardService } from './services/edit-guard';
import {LoadingService} from './services/loading';

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
  // Get the loading service
  protected loadingService = inject(LoadingService);
}



import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('HassanAli-Ziarati-Learning-AngularF26');

  fullName: String = "Hassan Ali Ziarati";
  age: Number = 25;
}



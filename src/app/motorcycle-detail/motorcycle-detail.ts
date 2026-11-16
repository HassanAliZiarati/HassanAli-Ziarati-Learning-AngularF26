import { Component,input, inject, computed, OnInit, OnDestroy } from '@angular/core';
import { MotorcycleService } from '../services/motorcycle';

@Component({
  imports: [],
  selector: 'app-motorcycle-detail',
  styleUrl: './motorcycle-detail.css',
  templateUrl: './motorcycle-detail.html',
})
export class MotorcycleDetail implements OnInit, OnDestroy {
  id = input.required<string>();

  private motorcycleService = inject(MotorcycleService);

  motorcycle = computed(() =>
    this.motorcycleService
      .motorcycleList()
      .find((motorcycle) => motorcycle.id === Number(this.id())),
  );

  // Store the opening time
  private openedAt = 0;

  // Store the motorcycle title
  private motorcycleTitle = 'Unknown motorcycle';

  ngOnInit(): void {
    this.openedAt = Date.now();

    const motorcycle = this.motorcycleService.getMotorcycle(Number(this.id()));

    if (motorcycle) {
      this.motorcycleTitle = motorcycle.title;
    }

    console.log('[lifecycle] opened:', this.motorcycleTitle);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);

    console.log(`[lifecycle] closed: ${this.motorcycleTitle} after ${seconds} seconds`);
  }
}

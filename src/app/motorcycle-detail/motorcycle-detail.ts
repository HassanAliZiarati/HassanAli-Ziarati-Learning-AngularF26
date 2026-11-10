import { Component,input, inject, computed } from '@angular/core';
import { MotorcycleService } from '../services/motorcycle';
import {it} from "vitest";

@Component({
  imports: [],
  selector: 'app-motorcycle-detail',
  styleUrl: './motorcycle-detail.css',
  templateUrl: './motorcycle-detail.html',
})
export class MotorcycleDetail {
  id = input.required<string>();

  private motorcycleService = inject(MotorcycleService);

  motorcycle = computed(() =>
    this.motorcycleService.motorcycleList().find(
      motorcycle => motorcycle.id === Number(this.id())
    )
  );
    protected readonly it = it;
}

import { Injectable, signal, computed } from '@angular/core';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private requestCount = signal(0);

  // Check if a request is running or not
  readonly isLoading = computed(() => this.requestCount() > 0);

  // Add one request
  start(): void {
    this.requestCount.update(count => count + 1);
  }

  // Remove a request
  stop(): void {
    this.requestCount.update(count => Math.max(0, count -1));
  }
}

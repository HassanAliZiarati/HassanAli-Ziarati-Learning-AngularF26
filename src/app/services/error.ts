import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class ErrorService {
  // Store the error message
  readonly errorMessage = signal<string | null>(null);


  // Clear the error message
  clearMessage(): void {
    this.errorMessage.set(null);
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditGuardService {
  // When this value is true, Editing is locked
  readonly guardEnabled = signal<boolean>(true);

  // Switch between locked and unlocked
  changeGuard(): void {
    this.guardEnabled.update((enabled) => !enabled);
  }
}

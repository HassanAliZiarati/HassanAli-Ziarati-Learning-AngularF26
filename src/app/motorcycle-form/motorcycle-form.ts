import { Component, inject, input, effect, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Motorcycle} from '../shared/models/motorcycle';
import { MotorcycleService } from '../services/motorcycle';
import { Router } from '@angular/router';

// Check for spaces only
function noSpacesOnly(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (typeof value === 'string' && value.length > 0 && value.trim() === '') {
    return { spacesOnly: true };
  }

  return null;
}

// Check that brand and model are different
function differentBrandAndModel(
  control: AbstractControl
): ValidationErrors | null {
  const brand = control.get('brand')?.value;
  const model = control.get('model')?.value;

  if (brand && model && brand === model) {
    return { sameBrandAndModel: true };
  }

  return null;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-motorcycle-form',
  styleUrl: './motorcycle-form.css',
  templateUrl: './motorcycle-form.html',
})
export class MotorcycleForm {
  // Receive the motorcycle ID from the edit route
  id = input<string>();

  // Check whether the form is editing a motorcycle
  protected isEditMode = computed(() => this.id() !== undefined);

  private fb = inject(FormBuilder);
  private motorcycleService = inject(MotorcycleService);
  private router = inject(Router);

  protected onSubmit(): void {
    // Stop if the form is invalid
    if (this.motorcycleForm.invalid) {
      return;
    }

    const formValue = this.motorcycleForm.getRawValue();

    // Keep the existing ID when editing, or create a new ID
    const id = this.isEditMode() ? Number(this.id()) : this.motorcycleService.nextId();

    if (this.isEditMode()) {
      // Update the existing motorcycle
      this.motorcycleService.updateMotorcycle({ id, ...formValue });
    } else {
      // Add a new motorcycle
      this.motorcycleService.addMotorcycle({ id, ...formValue });
    }

    this.motorcycleForm.reset();

    // Open the saved motorcycle's details
    this.router.navigate(['/motorcycles', id]);
  }

  motorcycleForm = this.fb.nonNullable.group({
    // brand must not be empty and must have at least 2 characters
    brand: ['', [Validators.required, Validators.minLength(2), noSpacesOnly]],
    model: ['', [Validators.required]],
    engineCC: [0],
    category: ['sport' as Motorcycle['category']],
    hasABS: [false],
    image: [''],
  }, {
    validators: differentBrandAndModel,
    });

  constructor() {
    // Fill the form when an edit ID is received
    effect(() => {
      const id = this.id();

      if (id === undefined) {
        this.motorcycleForm.reset();
        return;
      }

      const motorcycle = this.motorcycleService.getMotorcycle(Number(id));

      if (motorcycle) {
        this.motorcycleForm.patchValue({
          ...motorcycle,
          hasABS: motorcycle.hasABS ?? false,
        });
      }
    });
  }
}

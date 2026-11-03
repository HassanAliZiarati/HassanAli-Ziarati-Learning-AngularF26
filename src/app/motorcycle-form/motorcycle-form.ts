import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Motorcycle} from '../shared/models/motorcycle';
import { MotorcycleService } from '../services/motorcycle';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-motorcycle-form',
  styleUrl: './motorcycle-form.css',
  templateUrl: './motorcycle-form.html',
})
export class MotorcycleForm {
  private fb = inject(FormBuilder);
  private motorcycleService = inject(MotorcycleService);

  protected onSubmit() {
    if (this.motorcycleForm.invalid) {
      return;
    }
    const formValue = this.motorcycleForm.getRawValue();
    const newMotorcycle: Motorcycle = {
      id:
        Math.max(0, ...this.motorcycleService.motorcycleList().map((motorcycle) => motorcycle.id)) +
        1,
      ...formValue,
    };
    this.motorcycleService.addMotorcycle(newMotorcycle);
    this.motorcycleForm.reset();
  }



  motorcycleForm = this.fb.nonNullable.group({
    // brand not be empty and must have at least 2 charectors
    brand: ['', [Validators.required, Validators.minLength(2)]],
    model: ['', [Validators.required]],
    engineCC: [0],
    category: ['sport' as Motorcycle['category']],
    hasABS: [false],
    image: [''],
  });
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotorcycleForm } from './motorcycle-form';

describe('MotorcycleForm', () => {
  let component: MotorcycleForm;
  let fixture: ComponentFixture<MotorcycleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MotorcycleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

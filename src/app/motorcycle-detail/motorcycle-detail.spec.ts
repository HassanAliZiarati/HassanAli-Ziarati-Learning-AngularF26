import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotorcycleDetail } from './motorcycle-detail';

describe('MotorcycleDetail', () => {
  let component: MotorcycleDetail;
  let fixture: ComponentFixture<MotorcycleDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MotorcycleDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

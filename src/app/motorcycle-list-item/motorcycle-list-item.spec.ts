import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotorcycleListItem } from './motorcycle-list-item';

describe('MotorcycleListItem', () => {
  let component: MotorcycleListItem;
  let fixture: ComponentFixture<MotorcycleListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MotorcycleListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

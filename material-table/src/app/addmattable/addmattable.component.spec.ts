import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmattableComponent } from './addmattable.component';

describe('AddmattableComponent', () => {
  let component: AddmattableComponent;
  let fixture: ComponentFixture<AddmattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmattableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

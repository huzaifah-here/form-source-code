import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthFifthStepComponent } from './fourth-fifth-step.component';

describe('FourthFifthStepComponent', () => {
  let component: FourthFifthStepComponent;
  let fixture: ComponentFixture<FourthFifthStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthFifthStepComponent]
    });
    fixture = TestBed.createComponent(FourthFifthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

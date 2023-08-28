import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFourthStepComponent } from './third-fourth-step.component';

describe('ThirdFourthStepComponent', () => {
  let component: ThirdFourthStepComponent;
  let fixture: ComponentFixture<ThirdFourthStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdFourthStepComponent]
    });
    fixture = TestBed.createComponent(ThirdFourthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

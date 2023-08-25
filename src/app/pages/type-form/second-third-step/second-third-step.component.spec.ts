import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondThirdStepComponent } from './second-third-step.component';

describe('SecondThirdStepComponent', () => {
  let component: SecondThirdStepComponent;
  let fixture: ComponentFixture<SecondThirdStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondThirdStepComponent]
    });
    fixture = TestBed.createComponent(SecondThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

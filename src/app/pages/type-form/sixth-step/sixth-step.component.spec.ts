import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthStepComponent } from './sixth-step.component';

describe('SixthStepComponent', () => {
  let component: SixthStepComponent;
  let fixture: ComponentFixture<SixthStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthStepComponent]
    });
    fixture = TestBed.createComponent(SixthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

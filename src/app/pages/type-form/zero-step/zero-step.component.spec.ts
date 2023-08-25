import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroStepComponent } from './zero-step.component';

describe('ZeroStepComponent', () => {
  let component: ZeroStepComponent;
  let fixture: ComponentFixture<ZeroStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZeroStepComponent]
    });
    fixture = TestBed.createComponent(ZeroStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

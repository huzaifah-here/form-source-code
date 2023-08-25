import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStepComponent } from './message-step.component';

describe('MessageStepComponent', () => {
  let component: MessageStepComponent;
  let fixture: ComponentFixture<MessageStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageStepComponent]
    });
    fixture = TestBed.createComponent(MessageStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

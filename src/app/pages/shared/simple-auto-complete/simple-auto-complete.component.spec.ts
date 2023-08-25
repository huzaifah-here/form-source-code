import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAutoCompleteComponent } from './simple-auto-complete.component';

describe('SimpleAutoCompleteComponent', () => {
  let component: SimpleAutoCompleteComponent;
  let fixture: ComponentFixture<SimpleAutoCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleAutoCompleteComponent]
    });
    fixture = TestBed.createComponent(SimpleAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

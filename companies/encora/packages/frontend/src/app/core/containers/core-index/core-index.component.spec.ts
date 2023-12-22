import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CoreIndexComponent } from './core-index.component';

describe('CoreIndexComponent', () => {
  let component: CoreIndexComponent;
  let fixture: ComponentFixture<CoreIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreIndexComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CoreIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

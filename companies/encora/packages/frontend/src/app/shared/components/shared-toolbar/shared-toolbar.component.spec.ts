import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedToolbarComponent } from './shared-toolbar.component';

describe('SharedToolbarComponent', () => {
  let component: SharedToolbarComponent;
  let fixture: ComponentFixture<SharedToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedToolbarComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SharedToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

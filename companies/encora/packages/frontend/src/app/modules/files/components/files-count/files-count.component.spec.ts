import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesCountComponent } from './files-count.component';

describe('FilesCountComponent', () => {
  let component: FilesCountComponent;
  let fixture: ComponentFixture<FilesCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesCountComponent]
    });
    fixture = TestBed.createComponent(FilesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

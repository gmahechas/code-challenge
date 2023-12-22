import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FilesUploadFormComponent } from './files-upload-form.component';

describe('FilesUploadFormComponent', () => {
  let component: FilesUploadFormComponent;
  let fixture: ComponentFixture<FilesUploadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesUploadFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FilesUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should emit onUploadFile event', () => {
      const mockPayload = { fileToUpload: new File(['file content'], 'test-file.txt') };
      component.uploadFileForm.setValue({ fileToUpload: new File(['file content'], 'test-file.txt') });
      const emitSpy = spyOn(component.onUploadFile, 'emit');

      component.onSubmit();

      expect(emitSpy).toHaveBeenCalledWith(mockPayload);
    });
  })

  describe('onFilePicked', () => {
    it('should patch value of fileToUpload form control', () => {
      const mockFile = new File(['file content'], 'test-file.txt');
      const mockEvent = {
        target: {
          files: {
            0: mockFile,
            length: 1,
          }
        }
      } as unknown as Event;

      component.onFilePicked(mockEvent);

      expect(component.uploadFileForm.controls.fileToUpload.value).toEqual(mockFile);
    });
  })
});

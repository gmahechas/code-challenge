import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FilesIndexComponent } from './files-index.component';
import { FilesService } from '../../services/files.service';
import { FilesServiceMock } from '../../services/mocks/files.service.mock';
import { IUploadFilePayload, IUploadFileResponse } from '../../models/files.models';

describe('FilesIndexComponent', () => {
  let component: FilesIndexComponent;
  let fixture: ComponentFixture<FilesIndexComponent>;
  let filesService: FilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesIndexComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: FilesService,
          useClass: FilesServiceMock,
        }
      ],
    });
    fixture = TestBed.createComponent(FilesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    filesService = TestBed.inject(FilesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onUploadFile', () => {
    it('should call filesServices.uploadFile', () => {
      const mockPayload: IUploadFilePayload = {
        fileToUpload: new File(['file content'], 'test.txt'),
      };

      component.onUploadFile(mockPayload);

      expect(filesService.uploadFile).toHaveBeenCalledWith(mockPayload);
    });
  })
});

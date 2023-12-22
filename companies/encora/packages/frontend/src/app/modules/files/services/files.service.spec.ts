import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FilesService } from './files.service';
import { IUploadFilePayload } from '../models/files.models';

describe('FilesService', () => {
  let service: FilesService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilesService]
    });
    service = TestBed.inject(FilesService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('uploadFile', () => {
    it('should upload file', () => {
      const mockPayload: IUploadFilePayload = {
        fileToUpload: new File(['file content'], 'test.txt'),
      };
      
      service.uploadFile(mockPayload).subscribe();
      const request = httpClient.expectOne('http://127.0.0.1:5000/rest/v1/file/upload');

      expect(request.request.method).toBe('POST');
    });
  });
  
});

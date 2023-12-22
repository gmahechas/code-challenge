import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUploadFilePayload, IUploadFileResponse } from '../models/files.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  uploadFile(file: IUploadFilePayload): Observable<IUploadFileResponse[]> {
    const formData = new FormData();
    formData.append('file', file.fileToUpload);
    return this.httpClient.post<IUploadFileResponse[]>('http://127.0.0.1:5000/rest/v1/file/upload', formData);
  }
}

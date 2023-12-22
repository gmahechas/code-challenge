import { Component } from '@angular/core';
import { take } from 'rxjs';
import { FilesService } from '../../services/files.service';
import { IUploadFilePayload, IUploadFileResponse } from '../../models/files.models';

@Component({
  selector: 'app-files-index',
  templateUrl: './files-index.component.html',
  styleUrls: ['./files-index.component.scss']
})
export class FilesIndexComponent {

  files: IUploadFileResponse[] = [];

  constructor(
    private readonly filesService: FilesService,
  ) { }

  onUploadFile(event: IUploadFilePayload): void {
    this.filesService.uploadFile(event).pipe(take(1)).subscribe(files => this.files = files);
  }
}

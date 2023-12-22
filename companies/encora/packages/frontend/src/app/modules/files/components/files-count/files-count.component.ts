import { Component, Input } from '@angular/core';
import { IUploadFileResponse } from '../../models/files.models';

@Component({
  selector: 'app-files-count',
  templateUrl: './files-count.component.html',
  styleUrls: ['./files-count.component.scss']
})
export class FilesCountComponent {

  @Input() files: IUploadFileResponse[] = [];
}

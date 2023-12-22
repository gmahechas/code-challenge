import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUploadFileForm, IUploadFilePayload } from '../../models/files.models';

@Component({
  selector: 'app-files-upload-form',
  templateUrl: './files-upload-form.component.html',
  styleUrls: ['./files-upload-form.component.scss']
})
export class FilesUploadFormComponent {

  @Output() onUploadFile = new EventEmitter<IUploadFilePayload>();

  uploadFileForm = new FormGroup<IUploadFileForm>({
    fileToUpload: new FormControl<File | null>(null, [Validators.required]),
  });

  onSubmit(): void {
    if (this.uploadFileForm.valid && this.uploadFileForm.value.fileToUpload) {
      this.onUploadFile.emit({ fileToUpload: this.uploadFileForm.value.fileToUpload });
    }
  }

  onFilePicked(event: Event): void {
    const fileElement = event.target as HTMLInputElement;

    if (fileElement.files?.length) {
      this.uploadFileForm.patchValue({ fileToUpload: fileElement.files[0] });
    }
  }

}

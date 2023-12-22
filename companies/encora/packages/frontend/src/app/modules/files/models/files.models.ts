import { FormControl } from '@angular/forms';

export interface IUploadFileForm {
	fileToUpload: FormControl<File | null>,
}

export interface IUploadFilePayload {
	fileToUpload: File,
}

export interface IUploadFileResponse {
	word: string,
	count: number,
};
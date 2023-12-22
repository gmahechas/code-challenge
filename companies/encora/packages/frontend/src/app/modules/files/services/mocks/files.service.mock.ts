import { PublicOnly } from 'src/app/utils/common.types';
import { FilesService } from '../files.service';
import { of } from 'rxjs';

export class FilesServiceMock implements PublicOnly<FilesService> {
	public uploadFile = jasmine.createSpy('uploadFile').and.returnValue(of([{ word: 'test', count: 1 }]));
}
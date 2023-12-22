import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilesIndexComponent } from './containers/files-index/files-index.component';

const routes: Routes = [
  {
    path: '',
    component: FilesIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }

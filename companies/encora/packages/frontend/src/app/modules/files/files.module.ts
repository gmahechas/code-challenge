import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FilesRoutingModule } from './files-routing.module';

import { containers } from './containers';
import { components } from './components';

@NgModule({
  declarations: [
    ...containers,
    ...components,
  ],
  imports: [
    SharedModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }

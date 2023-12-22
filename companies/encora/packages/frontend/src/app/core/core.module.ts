import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { containers } from './containers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ...containers,
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }

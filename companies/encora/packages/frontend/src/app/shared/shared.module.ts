import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { components } from './components';

@NgModule({
  declarations: [
  ...components,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...[
      MatToolbarModule,
      MatGridListModule,
      MatButtonModule,
    ],
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ...[
      MatToolbarModule,
      MatGridListModule,
      MatButtonModule,
    ],
    ...components,
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompA1Component } from './comp-a1/comp-a1.component';
import { CompA2Component } from './comp-a2/comp-a2.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompA1Component, CompA2Component],
  imports: [CommonModule, RouterModule],
  exports: [CompA1Component, CompA2Component],
})
export class FeatureAModule {}

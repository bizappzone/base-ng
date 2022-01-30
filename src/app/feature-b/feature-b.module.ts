import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompB1Component } from './comp-b1/comp-b1.component';
import { CompB2Component } from './comp-b2/comp-b2.component';
import { FeatureBRoutingModule } from './feature-b-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCompb from './reducers/compb.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompbEffects } from './effects/compb.effects';

@NgModule({
  declarations: [CompB1Component, CompB2Component],
  imports: [CommonModule, FeatureBRoutingModule, StoreModule.forFeature(fromCompb.compbFeatureKey, fromCompb.reducer), EffectsModule.forFeature([CompbEffects])],
  exports: [CompB1Component, CompB2Component],
})
export class FeatureBModule {}

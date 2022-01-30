import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompB1Component } from './comp-b1/comp-b1.component';

const routes: Routes = [
  {
    path: '',
    component: CompB1Component,
  },

  // {
  //   path: 'feature-2',
  //   loadChildren: () =>
  //     import('./feature-b/feature-b.module').then((m) => m.FeatureBModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureBRoutingModule {}

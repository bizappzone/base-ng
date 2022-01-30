import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompA1Component } from './feature-a/comp-a1/comp-a1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: CompA1Component,
  },

  {
    path: 'feature-b',
    loadChildren: () =>
      import('./feature-b/feature-b.module').then((m) => m.FeatureBModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

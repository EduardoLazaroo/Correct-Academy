import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PernaPage } from './perna.page';

const routes: Routes = [
  {
    path: '',
    component: PernaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PernaPageRoutingModule {}

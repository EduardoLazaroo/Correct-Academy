import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostasPage } from './costas.page';

const routes: Routes = [
  {
    path: '',
    component: CostasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostasPageRoutingModule {}

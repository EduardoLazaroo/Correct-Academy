import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrgprogPage } from './prgprog.page';

const routes: Routes = [
  {
    path: '',
    component: PrgprogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrgprogPageRoutingModule {}

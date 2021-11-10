import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeitoPage } from './peito.page';

const routes: Routes = [
  {
    path: '',
    component: PeitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeitoPageRoutingModule {}

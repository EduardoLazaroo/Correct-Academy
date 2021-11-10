import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AerobicoPage } from './aerobico.page';

const routes: Routes = [
  {
    path: '',
    component: AerobicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerobicoPageRoutingModule {}

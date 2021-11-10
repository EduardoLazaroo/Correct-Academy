import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostasPageRoutingModule } from './costas-routing.module';

import { CostasPage } from './costas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostasPageRoutingModule
  ],
  declarations: [CostasPage]
})
export class CostasPageModule {}

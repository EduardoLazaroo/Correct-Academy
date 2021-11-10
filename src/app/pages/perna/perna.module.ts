import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PernaPageRoutingModule } from './perna-routing.module';

import { PernaPage } from './perna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PernaPageRoutingModule
  ],
  declarations: [PernaPage]
})
export class PernaPageModule {}

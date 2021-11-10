import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AerobicoPageRoutingModule } from './aerobico-routing.module';

import { AerobicoPage } from './aerobico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AerobicoPageRoutingModule
  ],
  declarations: [AerobicoPage]
})
export class AerobicoPageModule {}

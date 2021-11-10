import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeitoPageRoutingModule } from './peito-routing.module';

import { PeitoPage } from './peito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeitoPageRoutingModule
  ],
  declarations: [PeitoPage]
})
export class PeitoPageModule {}

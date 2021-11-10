import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrgprogPageRoutingModule } from './prgprog-routing.module';

import { PrgprogPage } from './prgprog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrgprogPageRoutingModule
  ],
  declarations: [PrgprogPage]
})
export class PrgprogPageModule {}

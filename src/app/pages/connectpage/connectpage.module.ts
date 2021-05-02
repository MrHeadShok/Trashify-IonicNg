import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectpagePageRoutingModule } from './connectpage-routing.module';

import { ConnectpagePage } from './connectpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectpagePageRoutingModule
  ],
  declarations: [ConnectpagePage]
})
export class ConnectpagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WdetailsPageRoutingModule } from './wdetails-routing.module';

import { WdetailsPage } from './wdetails.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { WinfoPageModule } from '../winfo/winfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    WdetailsPageRoutingModule,
    WinfoPageModule
  ],
  declarations: [WdetailsPage]
})
export class WdetailsPageModule {}

import { FiltroPipe } from './../pipes/filtro.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot({ mode: 'md' }), HomePageRoutingModule],
  declarations: [HomePage, FiltroPipe],
})
export class HomePageModule {}

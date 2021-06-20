import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListEffects } from './store/list.effects';



@NgModule({
  declarations: [ListItemsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([ListEffects]),
  ]
})
export class ListModule { }

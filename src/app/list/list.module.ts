import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListEffects } from './store/list.effects';



@NgModule({
  declarations: [ListItemsComponent],
  exports: [ListItemsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ListEffects]),
  ]
})
export class ListModule { }

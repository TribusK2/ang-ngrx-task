import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSwitchComponent } from './components/user-switch/user-switch.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserSwitchComponent],
  exports: [
    UserSwitchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([UsersEffects]),
    FormsModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { ModalPage } from '../modal/modal.page';
import { ComponentsModule } from '../componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      }
    ])
  ],
  declarations: [LoginPage, ModalPage],
  entryComponents: [ModalPage]
})
export class LoginPageModule {}

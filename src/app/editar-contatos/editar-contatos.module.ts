import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarContatosPage } from './editar-contatos.page';
import { ComponentsModule } from '../componentes/components.module';

const routes: Routes = [
  {
    path: '',
    component: EditarContatosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarContatosPage]
})
export class EditarContatosPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaContatosDetalhePage } from './lista-contatos-detalhe.page';
import { ComponentsModule } from '../componentes/components.module';
const routes: Routes = [
  {
    path: '',
    component: ListaContatosDetalhePage
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
  declarations: [ListaContatosDetalhePage]
})
export class ListaContatosDetalhePageModule {}

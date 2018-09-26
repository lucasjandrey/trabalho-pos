import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaContatosDetalhePage } from './lista-contatos-detalhe.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ListaContatosDetalhePage]
})
export class ListaContatosDetalhePageModule {}

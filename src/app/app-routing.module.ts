import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'lista-contatos', loadChildren: './lista-contatos/lista-contatos.module#ListaContatosPageModule', canActivate: [AuthGuard]},
  { path: 'lista-contatos-detalhe', loadChildren: './lista-contatos-detalhe/lista-contatos-detalhe.module#ListaContatosDetalhePageModule'
   , canActivate: [AuthGuard]},
  { path: 'editar-contatos', loadChildren: './editar-contatos/editar-contatos.module#EditarContatosPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

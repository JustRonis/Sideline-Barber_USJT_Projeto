import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { CadastroBarbeiroComponent } from './cadastro-barbeiro/cadastro-barbeiro.component';
import { ContatoComponent } from './contato/contato.component';
import { CortesComponent } from './cortes/cortes.component';
import { HomeComponent } from './home/home.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cortes',
    component: CortesComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'adm',
    component: AdministradorComponent
  },
  {
    path: 'cadastro-barbeiro',
    component: CadastroBarbeiroComponent
  },
  {
    path: 'meus-agendamentos',
    component: MeusAgendamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
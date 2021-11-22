import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CortesComponent } from './cortes/cortes.component';
import { HomeComponent } from './home/home.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { ModalAtendimentoComponent } from './modal-atendimento/modal-atendimento.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { ModalCompraComponent } from './modal-compra/modal-compra.component';
import { ModalExclusivoComponent } from './modal-exclusivo/modal-exclusivo.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalNecessarioComponent } from './modal-necessario/modal-necessario.component';
import { ModalProfissionalComponent } from './modal-profissional/modal-profissional.component';
import { ModalRedefinirSenhaComponent } from './modal-redefinir-senha/modal-redefinir-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CortesComponent,
    MeusAgendamentosComponent,
    ModalAtendimentoComponent,
    ModalNecessarioComponent,
    ModalCompraComponent,
    ModalExclusivoComponent,
    ModalProfissionalComponent,
    ModalCadastroComponent,
    ModalRedefinirSenhaComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

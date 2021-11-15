import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CortesComponent } from './cortes/cortes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModalAtendimentoComponent } from './modal-atendimento/modal-atendimento.component';
import { ModalCompraComponent } from './modal-compra/modal-compra.component';
import { ModalExclusivoComponent } from './modal-exclusivo/modal-exclusivo.component';
import { ModalNecessarioComponent } from './modal-necessario/modal-necessario.component';
import { ModalProfissionalComponent } from './modal-profissional/modal-profissional.component';
import { ModalSegurancaComponent } from './modal-seguranca/modal-seguranca.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CortesComponent,
    ModalAtendimentoComponent,
    ModalSegurancaComponent,
    ModalNecessarioComponent,
    ModalCompraComponent,
    ModalExclusivoComponent,
    ModalProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

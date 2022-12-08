import { FooterComponent } from './yond/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './yond/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ConteudoComponent } from './yond/home/conteudo/conteudo.component';
import {MatCardModule} from '@angular/material/card';
import { ServicoComponent } from './yond/home/conteudo/servico/servico.component';
import { ProjetosComponent } from './yond/projetos/projetos.component';
import { PortfolioComponent } from './yond/portfolio/portfolio.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SobreComponent } from './yond/sobre/sobre.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConteudoComponent,
    ServicoComponent,
    ProjetosComponent,
    FooterComponent,
    PortfolioComponent,
    SobreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

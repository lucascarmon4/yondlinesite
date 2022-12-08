import { ProjetosComponent } from './yond/projetos/projetos.component';
import { PortfolioComponent } from './yond/portfolio/portfolio.component';
import { HomeComponent } from './yond/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_Routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(APP_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const routing: RouterModule = RouterModule.forRoot(APP_Routes);


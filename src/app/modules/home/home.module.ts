import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './pages/home/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { DemonstrativoFinanceiroPage } from './pages/demonstrativo-financeiro/demonstrativo-financeiro.page';
import { SimplesPage } from './pages/simples/simples.page';

@NgModule({
  declarations: [
    HomePage,
    DemonstrativoFinanceiroPage,
    SimplesPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
  }
 }

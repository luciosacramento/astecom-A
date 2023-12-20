import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemonstrativoFinanceiroPage } from './modules/home/pages/demonstrativo-financeiro/demonstrativo-financeiro.page';
import { HomePage } from './modules/home/pages/home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'home',component:HomePage},
  { path:'demonstrativo-financeiro',component:DemonstrativoFinanceiroPage},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

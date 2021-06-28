import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrizacaoEditComponent } from './pages/parametrizacao-edit/parametrizacao-edit.component';
import { ParametrizacaoConsultaComponent } from './pages/parametrizacao-consulta/parametrizacao-consulta.component';
import { CompraMoedaComponent } from './pages/compra-moeda/compra-moeda.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cotacao', component: CompraMoedaComponent },
  { path: 'parametrizacao-segmento', component: ParametrizacaoConsultaComponent },
  { path: 'parametrizacao-segmento/{id}', component: ParametrizacaoEditComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {GaleriaComponent} from './componentes/galeria/galeria.component';
import {InstructivoComponent} from './componentes/instructivo/instructivo.component';
import {DescargaComponent} from './componentes/descarga/descarga.component';
import {AdminComponent} from './componentes/admin/admin.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'nosotros', component: AdminComponent},
  {path: 'instructivo', component: InstructivoComponent},
  {path: 'descarga', component: DescargaComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

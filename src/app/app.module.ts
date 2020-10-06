import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NavbarComponent} from './componentes/navbar/navbar.component';
import {HomeComponent} from './componentes/home/home.component';
import {GaleriaComponent} from './componentes/galeria/galeria.component';
import {DescargaComponent} from './componentes/descarga/descarga.component';
import {InstructivoComponent} from './componentes/instructivo/instructivo.component';
import {AdminComponent} from './componentes/admin/admin.component';
import {NosotrosComponent} from './componentes/nosotros/nosotros.component';
import {FooterComponent} from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleriaComponent,
    DescargaComponent,
    InstructivoComponent,
    NosotrosComponent,
    AdminComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosService } from './services/productos.service';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TransferComponent } from './transfer/transfer.component';
import { TargetedComponent } from './targeted/targeted.component';
import { BienestarComponent } from './bienestar/bienestar.component';
import { DigestivaComponent } from './digestiva/digestiva.component';
import { PesoComponent } from './peso/peso.component';
import { TransformComponent } from './transform/transform.component';
import { VictorComponent } from './victor/victor.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    FooterComponent,
    TransferComponent,
    TargetedComponent,
    BienestarComponent,
    DigestivaComponent,
    PesoComponent,
    TransformComponent,
    VictorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

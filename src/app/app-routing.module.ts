import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { TransferComponent } from './transfer/transfer.component';
import { TargetedComponent } from './targeted/targeted.component';
import { BienestarComponent } from './bienestar/bienestar.component';
import { DigestivaComponent } from './digestiva/digestiva.component';
import { PesoComponent } from './peso/peso.component';
import { TransformComponent } from './transform/transform.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'transfer', component: TransferComponent},
  { path: 'targeted', component: TargetedComponent},
  { path: 'bienestar', component: BienestarComponent},
  { path: 'digestiva', component: DigestivaComponent},
  { path: 'peso', component: PesoComponent},
  { path: 'transform', component: TransformComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

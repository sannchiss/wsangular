import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreacionEnvioComponent } from  '../app/components/creacion-envio/creacion-envio.component';

const routes: Routes = [
{
path: 'app-creacion-envio',
component: CreacionEnvioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

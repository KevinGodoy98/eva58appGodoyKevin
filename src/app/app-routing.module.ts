import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

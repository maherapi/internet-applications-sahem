import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'session',
    loadChildren: () => import('src/app/session/session.module').then(m => m.SessionModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/app-layout/app-layout.module').then(m => m.AppLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

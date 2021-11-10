import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then(m => m.LoaderPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), },//
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule) },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'prgprog', loadChildren: () => import('./pages/prgprog/prgprog.module').then(m => m.PrgprogPageModule), canActivate: [AuthGuard] },
  { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule), canActivate: [AuthGuard] },
  { path: 'comment', loadChildren: () => import('./pages/comment/comment.module').then(m => m.CommentPageModule), canActivate: [AuthGuard] },
  { path: 'midia', loadChildren: () => import('./pages/midia/midia.module').then(m => m.MidiaPageModule), canActivate: [AuthGuard] },
  { path: 'perna', loadChildren: () => import('./pages/perna/perna.module').then(m => m.PernaPageModule), canActivate: [AuthGuard] },
  { path: 'peito', loadChildren: () => import('./pages/peito/peito.module').then(m => m.PeitoPageModule), canActivate: [AuthGuard] },
  { path: 'aerobico', loadChildren: () => import('./pages/aerobico/aerobico.module').then(m => m.AerobicoPageModule), canActivate: [AuthGuard] },
  { path: 'costas', loadChildren: () => import('./pages/costas/costas.module').then(m => m.CostasPageModule), canActivate: [AuthGuard] },
  { path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard] },
  { path: 'details/:id', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard] }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

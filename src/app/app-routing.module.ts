import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'quotes',
    loadChildren: './pages/quotes/quotes/quotes.module#QuotesPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'details',
    loadChildren: './pages/quotes/details/details.module#DetailsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './pages/sign-in/login/login.module#LoginPageModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/sign-in/signup/signup.module#SignupPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

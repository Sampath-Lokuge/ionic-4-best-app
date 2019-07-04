import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: './pages/quotes/quotes.module#QuotesPageModule'
  },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'login', loadChildren: './pages/sign-in/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/sign-in/signup/signup.module#SignupPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

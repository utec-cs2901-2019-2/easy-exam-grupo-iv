import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { SeekerComponent } from './views/principal/screens/seeker/seeker.component';
import { ConfigComponent } from './views/principal/screens/config/config.component';
import { HistoryComponent } from './views/principal/screens/history/history.component';
import { SavedQuestionsComponent } from './views/principal/screens/saved-questions/saved-questions.component';
import { NewexamComponent } from './views/principal/screens/newexam/newexam.component';
import { PreviewComponent } from './views/principal/screens/preview/preview.component';

import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import { LoggedGuardGuard } from './shared/guards/logged-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    canActivate: [LoggedGuardGuard],
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SeekerComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'saved',
        component: SavedQuestionsComponent
      },
      {
        path: 'config',
        component: ConfigComponent
      },
      {
        path: 'new',
        component: NewexamComponent
      },
      {
        path: 'preview',
        component: PreviewComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

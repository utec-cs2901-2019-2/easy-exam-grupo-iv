import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { SeekerComponent } from './views/principal/screens/seeker/seeker.component';
import { ConfigComponent } from './views/principal/screens/config/config.component';
import { HistoryComponent } from './views/principal/screens/history/history.component';
import { SavedQuestionsComponent } from './views/principal/screens/saved-questions/saved-questions.component';
import { NewexamComponent } from './views/principal/screens/newexam/newexam.component';

const routes: Routes = [
  {
    path: 'search',
    component: SeekerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

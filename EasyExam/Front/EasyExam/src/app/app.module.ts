import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { NavbarComponent } from './views/principal/navbar/navbar.component';
import { AdminComponent } from './views/principal/screens/admin/admin.component';
import { ConfigComponent } from './views/principal/screens/config/config.component';
import { CreatorComponent } from './views/principal/screens/creator/creator.component';
import { PreviewComponent } from './views/principal/screens/preview/preview.component';
import { SavedQuestionsComponent } from './views/principal/screens/saved-questions/saved-questions.component';
import { SeekerComponent } from './views/principal/screens/seeker/seeker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './views/principal/screens/history/history.component';
import { QuestiondialogComponent } from './views/principal/screens/shared/questiondialog/questiondialog.component';
import { NewexamComponent } from './views/principal/screens/newexam/newexam.component';
import { SavedqdialogComponent } from './views/principal/screens/shared/savedqdialog/savedqdialog.component';
import { NewquestionComponent } from './views/principal/screens/newquestion/newquestion.component';

export function gettoken() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AdminComponent,
    ConfigComponent,
    CreatorComponent,
    PreviewComponent,
    SavedQuestionsComponent,
    SeekerComponent,
    HistoryComponent,
    QuestiondialogComponent,
    NewexamComponent,
    SavedqdialogComponent,
    NewquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: gettoken,
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['http://localhost:4200/login']
      }
    })
  ],
  providers: [
  ],
  entryComponents: [
    QuestiondialogComponent,
    SavedqdialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

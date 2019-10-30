import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SeekerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

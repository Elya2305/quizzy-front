import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {CreateGameComponent} from './create-game/create-game.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PlayGameComponent} from './play-game/play-game.component';
import {FinishGameComponent} from './finish-game/finish-game.component';
import {AlertComponent} from './shared/components/alert/alert.component';
import {AuthInterceptor} from "./shared/interceptor/auth.interceptor";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StatisticsComponent} from './statistics/statistics.component';

const RESPONSE_INTERCEPTOR_PROVIDER: Provider = {
  multi: true,
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NavbarComponent,
    LoginComponent,
    CreateGameComponent,
    PlayGameComponent,
    FinishGameComponent,
    AlertComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    // SOCIAL_PROVIDER,
    RESPONSE_INTERCEPTOR_PROVIDER
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

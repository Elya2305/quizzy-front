import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {CreateGameComponent} from "./create-game/create-game.component";
import {PlayGameComponent} from "./play-game/play-game.component";
import {FinishGameComponent} from "./finish-game/finish-game.component";
import {StatisticsComponent} from "./statistics/statistics.component";


const routes: Routes = [
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: 'create-game', component: CreateGameComponent, canActivate: [AuthGuardService]},
  {path: 'play-game', component: PlayGameComponent, canActivate: [AuthGuardService]},
  {path: 'finish-game', component: FinishGameComponent, canActivate: [AuthGuardService]},
  {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuardService]},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

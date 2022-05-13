import {Injectable} from '@angular/core';
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private socialUserIdToken: string

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
  }

  get idToken() {
    return this.socialUserIdToken;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.socialAuthService.authState.pipe(
      tap((socialUser: SocialUser) => {
        if (!socialUser) {
          this.router.navigate(['login']);
        }
        this.socialUserIdToken = socialUser.idToken;
      }),
      map(socialUser => !!socialUser)
    );
  }
}

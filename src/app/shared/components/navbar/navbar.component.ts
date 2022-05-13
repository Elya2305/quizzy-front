import {Component, OnInit} from '@angular/core';
import {SocialAuthService, SocialUser} from "angularx-social-login";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  isAuthorized(): boolean {
    var loggedIn = false
    this.socialAuthService.authState.pipe(
      map((socialUser: SocialUser) => !!socialUser),
    ).subscribe(isLogged => loggedIn = isLogged)

    return loggedIn;
  }

  logOut() {
    this.socialAuthService.signOut()
      .then(r => this.router.navigate(['login']));
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    var isLoggedIn: boolean;
    this.socialAuthService.authState.subscribe(u => {
      console.log(u)
      isLoggedIn = !!u;
      if (isLoggedIn) {
        this.router.navigate(['profile'])
      }
    })
  }

  loginWithGoogle(): void {
    console.log('loginWithGoogle')
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['profile']));
  }
}

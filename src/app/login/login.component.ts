import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CredentialResponse} from 'google-one-tap';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: '1079591479751-6fiu4a583rtir3o7qbctrs74bjpnh3m1.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: true,
        cancel_on_tap_outside: false
      });
    };
  }

  handleCredentialResponse(response: CredentialResponse) {
    console.log(this.authService.getIdToken())

    this.authService.setIdToken(response.credential);

    this.ngZone.run(() => {
      this.router.navigate(['/profile'], {replaceUrl: true});
    });
  }
}

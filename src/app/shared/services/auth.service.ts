import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  setIdToken(idToken: string) {
    localStorage.setItem("KEY", idToken)
  }

  getIdToken() {
    let token = localStorage.getItem("KEY");
    if (!token) {
      this.router.navigate(['login'])
    }
    return token;
  }

  isUserLoggedIn() {
    return localStorage.getItem("KEY") != null;
  }

  removeIdToken() {
    localStorage.removeItem("KEY")
  }
}

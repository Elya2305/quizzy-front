import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, EMPTY, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {AuthService} from "../services/auth.service";

class Error {
  message: string;
  status: number;
}

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService,
              private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone(
      {
        headers: request.headers.append(
          'Authorization-Google',
          // @ts-ignore
          this.authService.getIdToken()
        )
      }
    );

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let err: Error = error.error
        this.alertService.danger(err.message)
        console.log(error)

        return EMPTY;
      })
    );
  }
}

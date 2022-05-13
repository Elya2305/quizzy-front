import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {catchError, EMPTY, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlertService} from '../services/alert.service';
import {AuthGuardService} from "../services/auth-guard.service";

class Error {
  message: string;
  status: number;
}

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService,
              private authGuardService: AuthGuardService) {
  }

  private static emptyApiBody(r: HttpResponse<any>): Observable<HttpResponse<any>> {
    return of(
      r.clone<any>({
        body: null,
      }),
    );
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header

    const clonedRequest = request.clone(
      {
        headers: request.headers.append(
          'Authorization-Google',
          this.authGuardService.idToken
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

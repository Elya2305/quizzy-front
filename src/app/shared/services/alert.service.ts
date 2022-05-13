import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger' | 'info';

export interface Alert {
  text: string;
  type: AlertType;
}

@Injectable({providedIn: 'root'})
export class AlertService {

  // todo wtf?
  alert$: BehaviorSubject<Alert> = new BehaviorSubject<Alert>({
    text: '',
    type: 'success'
  });

  success(text: string): void {
    this.alert$.next({text, type: 'success'});
  }

  info(text: string): void {
    this.alert$.next({text, type: 'info'});
  }

  warning(text: string): void {
    this.alert$.next({text, type: 'warning'});
  }

  danger(text: string): void {
    this.alert$.next({text, type: 'danger'});
  }
}

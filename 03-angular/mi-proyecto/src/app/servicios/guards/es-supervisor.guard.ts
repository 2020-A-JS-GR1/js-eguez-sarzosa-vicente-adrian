import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class EsSupervisor implements CanActivate {

  constructor(
    private readonly _authService: AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // LOGICA BOOLEAN
    const esSupervisor = this._authService
      .roles
      .some(
        (rol) => {
          return rol === 'Supervisor'
        }
      )
    return esSupervisor;
  }

}

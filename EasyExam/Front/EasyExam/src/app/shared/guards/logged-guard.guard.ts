import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardGuard implements CanActivate {

  constructor(public jwtHelper: JwtHelperService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      const token = this.jwtHelper.decodeToken();
    } catch (err) {
      return false;
    }
    const date = this.jwtHelper.getTokenExpirationDate();
    if (date === null) {
      return false;
    }
    if (this.jwtHelper.isTokenExpired()) {
      return false;
    }
    return true;
  }
}

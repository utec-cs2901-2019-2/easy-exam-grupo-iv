import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LatexService } from '../services/latex.service';

@Injectable({
  providedIn: 'root'
})
export class PreviewGuard implements CanActivate {
  constructor(private tex: LatexService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tex.exam != null) {
      return true;
    }
    this.router.navigate(['search']);
    return false;
  }
}

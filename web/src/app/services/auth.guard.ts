import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelperService;

  constructor(private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = localStorage.getItem('access_token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {APP} from '../app.constants';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import * as decode from 'jwt-decode';
import {UserEntity} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: UserEntity;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(APP.SERVER_URL + 'login',
      {username: username, password: password})
      .pipe(map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  public getLoggedUser(tokenParam?): UserEntity {
    const token = tokenParam || localStorage.getItem('access_token');
    localStorage.setItem('access_token', token);
    let decodedToken: any = decode(token);
    return decodedToken.user;
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}

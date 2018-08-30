import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserEntity} from '../entities/user';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: DashboardComponent
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Array<UserEntity>> {
    return this.http.get<any>('http://localhost:3000/users');
  }

  register(user: UserEntity) {
    return this.http.post('http://localhost:3000/users/register', user);
  }
}

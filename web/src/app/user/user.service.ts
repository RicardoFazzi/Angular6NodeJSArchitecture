import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyDashboardComponent} from '../my-dashboard/my-dashboard.component';

@Injectable({
  providedIn: MyDashboardComponent
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<any>('http://localhost:3000/users');
  }

  register(user: any) {
    return this.http.post('http://localhost:3000/users/register', user);
  }
}

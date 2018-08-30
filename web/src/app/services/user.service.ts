import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyDashboardComponent } from '../my-dashboard/my-dashboard.component';

@Injectable({
  providedIn: MyDashboardComponent
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any>('http://localhost:3000/users');
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {LoginService} from '../login/login.service';
import {UserEntity} from '../entities/user';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users: Array<UserEntity>;
  public events: Array<any> = [];

  constructor(private userService: UserService, public loginService: LoginService) {
  }

  ngOnInit() {
    for (let i = 0; i < 35; i++) {
      this.events.push({time: i, name: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);});
    }

    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  logout() {
    this.loginService.logout();
  }
}

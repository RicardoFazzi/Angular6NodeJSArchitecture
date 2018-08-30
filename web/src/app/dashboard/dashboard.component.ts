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

  constructor(private userService: UserService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  logout() {
    this.loginService.logout();
  }
}

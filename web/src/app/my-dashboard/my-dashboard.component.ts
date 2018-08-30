import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit {

  public users: Array<any>;

  constructor(private userService: UserService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  cards = [
    {title: 'Card 1', cols: 2, rows: 1},
    {title: 'Card 2', cols: 1, rows: 1},
    {title: 'Card 3', cols: 1, rows: 2},
    {title: 'Card 4', cols: 1, rows: 1}
  ];

  logout() {
    this.loginService.logout();
  }
}

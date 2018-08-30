import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public username: string;
  public password: string;
  public error: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  public submit() {
    this.loginService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['dashboard']),
        err => this.error = 'Could not authenticate'
      );
  }

  createUser() {
    this.router.navigate(['createUser']);
  }

}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth.guard';
import {AppRoutes} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {httpInterceptorProviders} from './interceptors';
import {CreateUserComponent} from './user/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutes,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        }
      }
    }),
    LayoutModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, httpInterceptorProviders, JwtHelperService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

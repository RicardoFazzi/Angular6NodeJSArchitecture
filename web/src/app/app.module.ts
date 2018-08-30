import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth.guard';
import {AppRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    LoginComponent,
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
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [AuthGuard, JwtHelperService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

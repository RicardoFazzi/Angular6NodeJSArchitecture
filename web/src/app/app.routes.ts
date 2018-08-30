import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes =
  [
    {path: 'dashboard', component: MyDashboardComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent}
  ];

const routerOptions: ExtraOptions = {enableTracing: false, useHash: false};
export const AppRoutes: any = RouterModule.forRoot(routes, routerOptions);

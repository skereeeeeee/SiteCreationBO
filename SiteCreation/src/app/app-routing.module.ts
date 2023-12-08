import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardService  as AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { 
    path: 'Home',
    component: HomepageComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '', canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

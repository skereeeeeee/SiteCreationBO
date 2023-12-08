import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthServiceService } from './services/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuardService, AuthServiceService, JwtHelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

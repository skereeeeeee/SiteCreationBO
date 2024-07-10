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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChiSiamoComponent } from './chi-siamo.component';
import { INostriMarchiComponent } from './inostri-marchi/inostri-marchi.component';
import { INostriLavoriComponent } from './inostri-lavori/inostri-lavori.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { DoveTrovarciComponent } from './dove-trovarci/dove-trovarci.component';
import { TestoModalComponent } from './modals/testo-modal/testo-modal.component';
import { ImageModalComponent } from './modals/image-modal/image-modal.component';
import { ProductModalComponent } from './modals/product-modal/product-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { CodiciScontoComponent } from './codici-sconto/codici-sconto.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MarchiComponent } from './marchi/marchi.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { ColoriComponent } from './colori/colori.component';
import { TipiComponent } from './tipi/tipi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ErrorModalComponent,
    SuccessModalComponent,
    NavBarComponent,
    ChiSiamoComponent,
    INostriMarchiComponent,
    INostriLavoriComponent,
    ProdottiComponent,
    DoveTrovarciComponent,
    TestoModalComponent,
    ImageModalComponent,
    ProductModalComponent,
    ConfirmModalComponent,
    NewsLetterComponent,
    CodiciScontoComponent,
    MarchiComponent,
    MaterialiComponent,
    ColoriComponent,
    TipiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [AuthGuardService, AuthServiceService, JwtHelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

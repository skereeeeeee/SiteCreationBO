import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiSiamoComponent } from './chi-siamo.component';
import { CodiciScontoComponent } from './codici-sconto/codici-sconto.component';
import { ColoriComponent } from './colori/colori.component';
import { DoveTrovarciComponent } from './dove-trovarci/dove-trovarci.component';
import { HomepageComponent } from './homepage/homepage.component';
import { INostriLavoriComponent } from './inostri-lavori/inostri-lavori.component';
import { INostriMarchiComponent } from './inostri-marchi/inostri-marchi.component';
import { LoginComponent } from './login/login.component';
import { MarchiComponent } from './marchi/marchi.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { AggiungiModificaModalComponent } from './modals/aggiungi-modifica-modal/aggiungi-modifica-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { ImageModalComponent } from './modals/image-modal/image-modal.component';
import { ProductModalComponent } from './modals/product-modal/product-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { TestoModalComponent } from './modals/testo-modal/testo-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthServiceService } from './services/auth-service.service';
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
    TipiComponent,
    AggiungiModificaModalComponent
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
  providers: [AuthGuardService, AuthServiceService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

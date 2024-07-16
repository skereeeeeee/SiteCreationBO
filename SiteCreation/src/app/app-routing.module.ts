import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodiciScontoComponent } from './codici-sconto/codici-sconto.component';
import { ColoriComponent } from './colori/colori.component';
import { GestioneAdminsComponent } from './gestione-admins/gestione-admins.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MarchiComponent } from './marchi/marchi.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { TipiComponent } from './tipi/tipi.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  {
    path: 'Home',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Prodotti',
    component: ProdottiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Marchi',
    component: MarchiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Materiali',
    component: MaterialiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Colori',
    component: ColoriComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Tipi',
    component: TipiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'NewsLetter',
    component: NewsLetterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'CodiciSconto',
    component: CodiciScontoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'GestioneAdmins',
    component: GestioneAdminsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaimListComponent} from "./claim-list/claim-list.component";
import {ClaimCreationComponent} from "./claim-creation/claim-creation.component";
import {ClaimDetailsComponent} from "./claim-details/claim-details.component";
import {ClaimEditComponent} from "./claim-edit/claim-edit.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./security/services/auth-guard.service";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: ClaimListComponent,
      },
      {
        path: 'claim-creation',
        component: ClaimCreationComponent,
      },
      {
        path: 'claim-details/:id',
        component: ClaimDetailsComponent,
      },
      {
        path: 'claim-edit/:id',
        component: ClaimEditComponent,
      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

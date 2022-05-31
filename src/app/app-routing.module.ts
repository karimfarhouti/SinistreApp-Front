import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaimListComponent} from "./claim-list/claim-list.component";
import {ClaimCreationComponent} from "./claim-creation/claim-creation.component";
import {ClaimDetailsComponent} from "./claim-details/claim-details.component";
import {ClaimEditComponent} from "./claim-edit/claim-edit.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'claims',
    component: ClaimListComponent,
    pathMatch: 'full'
  },
  {
    path: 'claim-creation',
    component: ClaimCreationComponent,
    pathMatch: 'full'
  },
  {
    path: 'claim-details/:id',
    component: ClaimDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'claim-edit/:id',
    component: ClaimEditComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

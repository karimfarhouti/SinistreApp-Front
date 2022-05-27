import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaimListComponent} from "./claim-list/claim-list.component";
import {ClaimCreationComponent} from "./claim-creation/claim-creation.component";
import {ClaimDetailsComponent} from "./claim-details/claim-details.component";

//This is my case
const routes: Routes = [
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
    path: '',
    component: ClaimListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

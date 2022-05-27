import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClaimCreationComponent} from './claim-creation/claim-creation.component';
import {ClaimDetailsComponent} from './claim-details/claim-details.component';
import {ClaimListComponent} from './claim-list/claim-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { ClaimEditComponent } from './claim-edit/claim-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimCreationComponent,
    ClaimDetailsComponent,
    ClaimListComponent,
    ClaimEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

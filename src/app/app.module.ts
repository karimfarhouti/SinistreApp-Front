import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClaimCreationComponent} from './claim-creation/claim-creation.component';
import {ClaimDetailsComponent} from './claim-details/claim-details.component';
import {ClaimListComponent} from './claim-list/claim-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { ClaimEditComponent } from './claim-edit/claim-edit.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ClaimStatusPipe } from './pipes/claim-status.pipe';
import { LoginComponent } from './login/login.component';
import {HttpInterceptorServiceService} from "./security/services/http-interceptor-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ClaimCreationComponent,
    ClaimDetailsComponent,
    ClaimListComponent,
    ClaimEditComponent,
    ImageUploadComponent,
    ClaimStatusPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorServiceService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn()) {
      const authKey = sessionStorage.getItem(this.authenticationService.BASE_64_KEY);
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Authorization': authKey!
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}

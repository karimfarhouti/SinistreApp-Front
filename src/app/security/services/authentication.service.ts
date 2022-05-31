import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDao} from "../user-dao";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  ACCOUNT_API: string = "http://localhost:8080/account/authenticate";
  private USER_NAME_SESSION_ATTRIBUTE_NAME: string = "logged_user";
  login?: string | null = null;
  password?: string | null = null;
  BASE_64_KEY = 'auth_key';

  constructor(private http: HttpClient) {
  }

  handleLogin(userDAO: UserDao): Observable<User> {
    return this.http.post(this.ACCOUNT_API, userDAO);
  }

  createBasicAuthToken(login: string, password: string): string {
    const base64AuthKey = 'Basic ' + window.btoa(login + ":" + password);
    sessionStorage.setItem(this.BASE_64_KEY, base64AuthKey);
    return base64AuthKey;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user !== null;
  }

  registerSuccessfulLogin(login: string, password: string): void {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, login);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.BASE_64_KEY);
    this.login = null;
    this.password = null;
  }
}

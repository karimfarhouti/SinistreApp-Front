import {Component} from '@angular/core';
import {AuthenticationService} from "./security/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static API_URL: string = "http://localhost:8080/api/";
  public static noContentImagePath: string = "/assets/no-content-image.png";
  title = 'sinistreAppFront';

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

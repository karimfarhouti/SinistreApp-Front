import {Component} from '@angular/core';
import {AuthenticationService} from "./security/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static API_URL: string = "http://localhost:8080/api/";
  public static noContentImagePath: string = "/assets/no-content-image.png";
  title = 'sinistreAppFront';

  constructor(private authService: AuthenticationService) {}
}

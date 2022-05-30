import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static API_URL: string = "http://localhost:8080/api/";
  public static noContentImagePath: string = "/assets/no-content-image.png";
  title='sinistreAppFront';
}

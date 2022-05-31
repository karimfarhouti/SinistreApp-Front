import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../security/services/authentication.service";
import {Router} from "@angular/router";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDao} from "../security/user-dao";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDAO: UserDao = new UserDao();
  errorMessage: string | null = null;
  isFormSubmitted: boolean = false;

  loginForm: FormGroup = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
  }, {updateOn: "submit"});

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }


  login(): void {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      this.userDAO.login = this.loginForm.get(['login'])?.value;
      this.userDAO.password = this.loginForm.get(['password'])?.value;
      this.authenticationService.handleLogin(this.userDAO)
        .subscribe(value => {
          this.authenticationService.login = this.userDAO.login;
          this.authenticationService.password = this.userDAO.password;
          this.authenticationService.createBasicAuthToken(this.authenticationService.login!,this.authenticationService.password!);
          this.authenticationService.registerSuccessfulLogin(this.authenticationService.login!,this.authenticationService.password!)
          this.router.navigate(['/home']);
        },error => {
          this.errorMessage = "nom d\'utilisateur ou mot de passe erroné";
        })
    }
  }
}

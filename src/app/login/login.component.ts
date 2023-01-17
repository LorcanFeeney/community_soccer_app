import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from "../Service/auth.service";
import {AppRoutingModule} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLogin = true;
  errorMessage: string = '';
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onRegister() {
    const registerData = this.registerForm.value;
    this.authService.register(registerData.email, registerData.password)
      .subscribe(
        res => {
          this.router.navigate(['/verification']).then(r => {});
        },
        err => {
          console.log(err);
          this.errorMessage = 'Unable to register at this time';
        }
      );
  }


  onLogin() {
    console.log('Lorcan');
    this.router.navigate(['/leagueTable']);
    // const loginData = this.loginForm.value;
    // this.authService.login(loginData.email, loginData.password)
    //   .subscribe(
    //     res => {
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate(['/league-table.component.html']);
    //     },
    //     err => {
    //       console.log(err);
    //       this.errorMessage = 'Invalid email or password';
    //     }
    //   );
  }
}

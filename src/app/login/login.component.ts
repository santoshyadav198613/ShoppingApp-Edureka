import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/service/login.service';
import { Login } from '../service/service/login';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if (this.loginService.login(this.login)) {
      this.router.navigate(['product']);
    }
  }

}

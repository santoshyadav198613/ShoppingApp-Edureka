import { Injectable } from '@angular/core';
import { Login } from './login';
@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(login: Login) {
    if (login.userName === 'Test' && login.password === 'test') {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return this.isLoggedIn
  }
}

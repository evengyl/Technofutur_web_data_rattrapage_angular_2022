import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  login : string = "admin"
  pwd : string = "admin"
  isConnect : boolean = false

  constructor(private authS : AuthService)
  {
    this.authS.isConnect$.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect
    })
  }

  auth(){
    this.authS.auth(this.login, this.pwd)
  }

}

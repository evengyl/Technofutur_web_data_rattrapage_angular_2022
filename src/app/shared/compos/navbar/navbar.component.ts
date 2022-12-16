import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isConnect : boolean = false

  constructor(private authS : AuthService)
  {
    this.authS.isConnect$.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect
    })
  }
}

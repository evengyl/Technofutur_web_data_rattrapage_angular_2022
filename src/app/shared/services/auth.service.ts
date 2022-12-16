import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnect : boolean = false //sujet a émettre
  isConnect$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnect) //observable d'emission


  constructor() { }

  emitIsConnect()
  { //methode qui va émettre
    this.isConnect$.next(this.isConnect)
  }



  auth(login : string, pwd : string)
  {
    if(login == "admin" && pwd == "admin")
    {
      this.isConnect = true
      this.emitIsConnect()
    }
  }
}

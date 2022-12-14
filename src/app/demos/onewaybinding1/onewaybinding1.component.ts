import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding1',
  templateUrl: './onewaybinding1.component.html'
})
export class Onewaybinding1Component{

  message : string
  age : number
  isActive : boolean


  constructor(){
    this.message = "Bonjour à tous"
    this.age = 42
    this.isActive = true
  }

}

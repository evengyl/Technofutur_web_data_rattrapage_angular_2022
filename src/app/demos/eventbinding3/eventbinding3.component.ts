import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html'
})
export class Eventbinding3Component {

  total : number = 0
  countClick : number = 0
  toIncrement : number = 1

  constructor(){}


  incrementOne() : void
  {
    this.total ++
    this.countClick ++
  }


  incrementTen() : void
  {
    this.total += 10 
    this.countClick ++
  }


  increment(nbToAdd : number) : void
  {
    this.total += nbToAdd
    this.countClick ++
  }


}

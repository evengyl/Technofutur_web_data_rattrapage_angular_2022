import { Component } from '@angular/core';

@Component({
  selector: 'app-property-model4',
  templateUrl: './property-model4.component.html'
})
export class PropertyModel4Component {

  constructor(){}
  
  saveDate(date : string){
    let dateSelect : Date = new Date(date)
    console.log(dateSelect)
  }


  viewDom(domInput : HTMLInputElement)
  {
    console.log(domInput)
  }
}

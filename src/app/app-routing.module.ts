import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eventbinding3Component } from './demos/eventbinding3/eventbinding3.component';
import { Onewaybinding1Component } from './demos/onewaybinding1/onewaybinding1.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PropertyModel4Component } from './property-model4/property-model4.component';
import { FourOfourComponent } from './shared/compos/four-ofour/four-ofour.component';

const routes: Routes = [
    { path : "", component : HomepageComponent},
    { path : "onewaybinding", component : Onewaybinding1Component},
    { path : "twowaybinding", component : Twowaybinding2Component},
    { path : "eventbinding", component : Eventbinding3Component},
    { path : "propertymodel", component : PropertyModel4Component},

    


    { path : "**", component : FourOfourComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './shared/compos/navbar/navbar.component';
import { FooterComponent } from './shared/compos/footer/footer.component';
import { Onewaybinding1Component } from './demos/onewaybinding1/onewaybinding1.component';
import { Twowaybinding2Component } from './demos/twowaybinding2/twowaybinding2.component';
import { FormsModule } from '@angular/forms';
import { Eventbinding3Component } from './demos/eventbinding3/eventbinding3.component';
import { FourOfourComponent } from './shared/compos/four-ofour/four-ofour.component';
import { PropertyModel4Component } from './property-model4/property-model4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    Onewaybinding1Component,
    Twowaybinding2Component,
    Eventbinding3Component,
    FourOfourComponent,
    PropertyModel4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

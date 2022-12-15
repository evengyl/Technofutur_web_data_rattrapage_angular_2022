import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './shared/compos/navbar/navbar.component';
import { FooterComponent } from './shared/compos/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FourOfourComponent } from './shared/compos/four-ofour/four-ofour.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    FourOfourComponent,
    ShopComponent,
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

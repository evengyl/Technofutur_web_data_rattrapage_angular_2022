import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FourOfourComponent } from './shared/compos/four-ofour/four-ofour.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
    { path : "", component : HomepageComponent},
    { path : "shop", component : ShopComponent},
    { path : "auth", component : AuthComponent},

    


    { path : "**", component : FourOfourComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

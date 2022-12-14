import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path : "", component : HomepageComponent},
    { path : "films", component : FilmComponent},
    { path : "users", component : UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

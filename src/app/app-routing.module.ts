import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeSearchComponent } from './feature/poke-search/poke-search.component';


const routes: Routes = [
  { path: 'home', component: PokeSearchComponent },
  { path: '', component: PokeSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

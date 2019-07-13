import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokeSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class FeatureModule { }

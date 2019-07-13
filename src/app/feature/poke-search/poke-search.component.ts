import { Component, OnInit } from '@angular/core';
import { PokeLookupService } from 'src/app/shared/poke-lookup.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {

  searchName: string;
  statData: any[];

  constructor(private pokeLookup: PokeLookupService) {
    this.searchName = '';
    this.statData = [];
  }

  ngOnInit() { }

  lookup() {
    this.statData = [];
    this.pokeLookup.getPokeData(this.searchName, ['']).subscribe(
      pokeData => {
        const pokemon = JSON.parse(JSON.stringify(pokeData));
        for (const stat of pokemon.stats) {
          const entry = {
            statName: stat.stat.name,
            baseStatValue: stat.base_stat
          };
          this.statData.push(entry);
        }
      }
    );
  }
}

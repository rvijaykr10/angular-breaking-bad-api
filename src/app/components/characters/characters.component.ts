import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  loading: boolean = true;

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService.getCharacters().subscribe((data) => {
      this.characters = data;
      this.loading = false;
    });
  }
}

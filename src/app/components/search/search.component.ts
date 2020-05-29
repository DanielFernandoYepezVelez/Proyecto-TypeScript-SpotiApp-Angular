import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public artists: any[] = [];

  constructor(private spotify: SpotifyService) {}

  public buscar(termino: string) {
    this.spotify.getArtist(termino).subscribe((data: any) => {
      this.artists = data;
    });
  }
}

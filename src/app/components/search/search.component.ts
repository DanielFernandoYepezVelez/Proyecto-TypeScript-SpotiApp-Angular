import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artists: any[] = [];
  loading;

  constructor(private spotify: SpotifyService) {}

  public buscar(termino: string) {
    this.loading = true;

    this.spotify.getArtists(termino).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }
}

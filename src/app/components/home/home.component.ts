import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  newRealeses: any[] = [];

  constructor(private spotify: SpotifyService) {
    spotify.getNewRealeses().subscribe((data: any) => {
      this.newRealeses = data;
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { AllSongsService } from '../../all-songs.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input() favorites: any[] = [];
  error: boolean = false;
  preloading: boolean = true;

  constructor(private _songsService: AllSongsService) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.favorites = this._songsService.getFavorites();
  }

  isFavorite(id: String) {
    if (this.favorites != null && this.favorites != undefined) {
      let item = this.favorites.find((favorite) => favorite.id == id);
      if (item != undefined) {
        return 'fas fa-heart';
      }
    }
    return 'far fa-heart';
  }

  changeFavorite(song: any) {
    if (this.favorites != null && this.favorites != undefined) {
      let item = this.favorites.find((favorite) => favorite.id == song.id);
      if (item != undefined) {
        // this.toastr.error('Success', 'Removed from Favorites!');
        return this.favorites = this._songsService.removeFavorites(song);
      }
    }
    // this.toastr.success('Success', 'Added to Favorites!');
    return this.favorites = this._songsService.setFavorites(song);
  }
}

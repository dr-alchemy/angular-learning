import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('hello onFavoriteChange', eventArgs);
  }
  
  

}

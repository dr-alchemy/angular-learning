import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  //@Input() isFavorite: boolean;
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter(); 
  
  title;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;

    this.change.emit()
  }
  

}

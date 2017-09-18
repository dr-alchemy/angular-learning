import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = 'Authors';
  authors: string[];

  constructor(myService: AuthorsService) { 
    this.authors = myService.getAuthors();

  }

  getAuthorsCount() {
    return this.authors.length;
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }

}

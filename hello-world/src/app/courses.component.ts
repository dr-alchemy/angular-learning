import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses> "courses"  set this as a css selector <div class="courses">  ".courses"
    template: `
        <h2>{{ "Title : " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let myItem of courses">
                {{ myItem }}
            </li>
        </ul>
        
        `  // html template
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    constructor(myService: CoursesService) {
        this.courses = myService.getCourses()
    }
    
    getTitle() {
        return this.title;
    }
}
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

        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
        
        <button (click)="onSave1()">Save</button>
        <button (click)="onSave2($event)">Save</button>

        <div>
            <input (keyup)="onKeyUp($event)" />
            <br><br>
            
            <!-- Better angular way -->
            <input (keyup.enter)="onKeyUp2()" />
            <br><br>

            <!-- variable email on template (template variable) -->
            <input #email (keyup.enter)="onKeyUp3(email.value)" />
            <br><br>

            <input [(ngModel)]="email2" (keyup.enter)="onKeyUp4()" />
            <br><br>
        </div>
        <br><br>
        <div>
            {{ course.title | uppercase | lowercase }} <br>
            {{ course.students | number }} <br>
            {{ course.rating | number:'1.2-2' }} (Note 2-2 : 2 as the minimum and also the maximum decimal points)<br> 
            {{ course.price | currency:'AUD':true:'3.2-2' }} <br>
            {{ course.releaseDate | date:'shortDate'  }} <br>
        </div>
        <br><br>
        <div>
            {{ text | summary:30 }}
        </div>

        `  // html template
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;
    isActive = true;
    email2 = "me@example.com";
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2017, 9, 17)
    };
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    constructor(myService: CoursesService) {
        this.courses = myService.getCourses()
    }
    
    getTitle() {
        return this.title;
    }

    onKeyUp($event) {
        console.log($event.target.value);

        if($event.keyCode === 13) {
            console.log('Enter was pressed');
        }            
    }
    
    // Better angular way
    onKeyUp2() {
        console.log('Enter was pressed');
    }

    onKeyUp3(email) {
        console.log(email);
    }
    
    onKeyUp4() {
        console.log(this.email2);
    }
    
    


    onSave1() {
        console.log('Save button was clicked');
    }
    onSave2($event) {
        $event.stopPropagation(); //stop bubble propagation
        console.log('Save button was clicked', $event);
    }
}
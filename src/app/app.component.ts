import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itshareApp';
  favState = true;
  persons: string[] = ['Ali', 'Ahmed', 'Khaled', 'Mohamed'];
  peopleByCountry: any[] = [
    {
      country: 'Egypt',
      names: [
        { name: 'Mohamed' }, { name: 'Khaled' }
      ]
    },
    {
      country: 'Spain',
      names: [
        { name: 'Messi' }, { name: 'Zlatan' }
      ]
    }
  ];

  courses: any[] = [
    {
      id: 1,
      courseName: 'Java'
    }, {
      id: 2,
      courseName: 'Javascript'
    }, {
      id: 3,
      courseName: 'NodeJS'
    }, {
      id: 4,
      courseName: 'React'
    }, {
      id: 5,
      courseName: 'SQL'
    }
  ];
  newCourse = '';
  onAdd = () => {
    if (!this.newCourse) {
      return;
    }
    const newCourseData = {
      id: this.courses.length ? (this.courses[this.courses.length - 1].id + 1) : 1,
      courseName: this.newCourse
    };
    this.courses.push(newCourseData);
    this.newCourse = '';
    console.log('Courses: ', this.courses);

  }

  checkEnter = (event: KeyboardEvent) => {
    // if (event.keyCode === 13) {
    this.onAdd();
    // }

  }

  trackByCourse(index: number, course: any): number {
    return course ? course.id : undefined;
  }


  // onRemove = (courseName: string) => {
  //   let index = this.courses.indexOf(courseName);
  //   this.courses.splice(index, 1);
  // }

  favStateChanged = () => {
    console.log('fired from app component');
  }


}

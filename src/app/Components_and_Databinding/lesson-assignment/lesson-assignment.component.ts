import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-assignment',
  templateUrl: './lesson-assignment.component.html',
  styleUrls: ['./lesson-assignment.component.css']
})
export class LessonAssignmentComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}

import { Component } from '@angular/core';
import { LessonComponent } from '../lesson/lesson.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-lesson-list',
  imports: [LessonComponent, NgFor, NgIf, DatePipe, NgStyle],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  currentDate: Date = new Date();
  lessons = [
    {
      LessonName: 'balet',
      TeacherName: 'Mrs. cohen',
      AmountOfMeetings: 10,
      StartDate: new Date('2025-09-01'),
      Price: 100,
      DayOfWeek: 'Monday',
      Time: '10:00 AM'
    },
    {
      LessonName: 'filatis',
      TeacherName: 'Ms. levy',
      AmountOfMeetings: 8,
      StartDate: new Date('2025-05-05'),
      Price: 120,
      DayOfWeek: 'Wednesday',
      Time: '2:00 PM'
    },
    {
      LessonName: 'heroby',
      TeacherName: 'Ms. Brown',
      AmountOfMeetings: 12,
      StartDate: new Date('2025-05-10'),
      Price: 90,
      DayOfWeek: 'thursday',
      Time: '1:00 PM'
    },
    
    {
      LessonName: 'yoga',
      TeacherName: 'Mr. Smith',
      AmountOfMeetings: 6,
      StartDate: new Date('2025-06-15'),
      Price: 80,
      DayOfWeek: 'monday',
      Time: '9:00 AM'
    } ,
    {
      LessonName: 'zumba',
      TeacherName: 'Ms. Johnson',
      AmountOfMeetings: 10,
      StartDate: new Date('2025-07-20'),
      Price: 110,
      DayOfWeek: 'tuesday',
      Time: '11:00 AM'
    },
    {
      LessonName: 'swimming',
      TeacherName: 'Mr. Lee',
      AmountOfMeetings: 8,
      StartDate: new Date('2025-08-25'),
      Price: 130,
      DayOfWeek: 'sunday',
      Time: '3:00 PM'
    },
    {
      LessonName: 'karate',
      TeacherName: 'Ms. Kim',
      AmountOfMeetings: 10,
      StartDate: new Date('2025-09-30'),
      Price: 150,
      DayOfWeek: 'tuesday',
      Time: '4:00 PM'
    },
    {
      LessonName: 'painting',
      TeacherName: 'Mr. Patel',
      AmountOfMeetings: 5,
      StartDate: new Date('2025-10-05'),
      Price: 70,
      DayOfWeek: 'thursday',
      Time: '6:00 PM'
    },
    {
      LessonName: 'guitar',
      TeacherName: 'Ms. Garcia',
      AmountOfMeetings: 7,
      StartDate: new Date('2025-11-10'),
      Price: 95,
      DayOfWeek: 'monday',
      Time: '5:00 PM'
    },
    {
      LessonName: 'cooking',
      TeacherName: 'Mr. Martinez',
      AmountOfMeetings: 9,
      StartDate: new Date('2025-12-15'),
      Price: 85,
      DayOfWeek: 'wednesday',
      Time: '8:00 PM'
    },
    {
      LessonName: 'photography',
      TeacherName: 'Ms. Wilson',
      AmountOfMeetings: 11,
      StartDate: new Date('2026-01-20'),
      Price: 120,
      DayOfWeek: 'thursday',
      Time: '7:00 PM'
    },
    {
      LessonName: 'drama',
      TeacherName: 'Mr. Thompson',
      AmountOfMeetings: 10,
      StartDate: new Date('2026-02-25'),
      Price: 100,
      DayOfWeek: 'wednesday',
      Time: '2:00 PM'
    },
    {
      LessonName: 'chess',
      TeacherName: 'Ms. White',
      AmountOfMeetings: 8,
      StartDate: new Date('2026-03-30'),
      Price: 75,
      DayOfWeek: 'sunday',
      Time: '1:00 PM'
    },
    {
      LessonName: 'coding',
      TeacherName: 'Mr. Brown',
      AmountOfMeetings: 6,
      StartDate: new Date('2026-04-05'),
      Price: 110,
      DayOfWeek: 'tuesday',
      Time: '3:00 PM'
    },
    {
      LessonName: 'dance',
      TeacherName: 'Ms. Green',
      AmountOfMeetings: 10,
      StartDate: new Date('2026-05-10'),
      Price: 95,
      DayOfWeek: 'thursday',
      Time: '4:00 PM'
    },
    {
      LessonName: 'music theory',
      TeacherName: 'Mr. Black',
      AmountOfMeetings: 7,
      StartDate: new Date('2026-06-15'),
      Price: 80,
      DayOfWeek: 'friday',
      Time: '8:00 AM'
    },
    {
      LessonName: 'history',
      TeacherName: 'Ms. Blue',
      AmountOfMeetings: 9,
      StartDate: new Date('2026-07-20'),
      Price: 90,
      DayOfWeek: 'sunday',
      Time: '6:00 PM'
    },
    {
      LessonName: 'mathematics',
      TeacherName: 'Mr. Red',
      AmountOfMeetings: 8,
      StartDate: new Date('2026-08-25'),
      Price: 100,
      DayOfWeek: 'Sunday',
      Time: '7:00 PM'
    }
    

  ];


  constructor() {
  }
}

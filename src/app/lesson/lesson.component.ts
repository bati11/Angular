import { Component, input } from '@angular/core';
import { Lesson } from '../model/lesson.model';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lesson',
  imports: [],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  @Input() lesson!: any;

}

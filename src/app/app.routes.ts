import { Routes } from '@angular/router';
// import path from 'path';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path : '', component: LoginComponent },
    { path: 'lesson-list', component:LessonListComponent },
    { path: 'registration',component:RegistrationComponent}
];

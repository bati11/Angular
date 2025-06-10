import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
// import { get } from 'http';
import { Route } from '@angular/router';
import { UsersListServiceService } from '../service/users-list-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LessonListComponent } from '../lesson-list/lesson-list.component';
import { RegistrationComponent } from '../registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule , LessonListComponent,
            RegistrationComponent,MatFormFieldModule, MatInputModule,
            MatButtonModule, MatDividerModule, MatIconModule,MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formUser: FormGroup;
  users: User[] = [];
  constructor(private formB:FormBuilder,private usersListService: UsersListServiceService, private router: Router) {
    this.formUser = this.formB.group({
      name: ['',[Validators.required]],
      password: ['',[Validators.required]]
    }); 
    this.users = usersListService.getUsers();
    this.users.forEach(user => {
      user.name + " " + user.password + " " + user.role;
    });
  }
  checkDetails() {
    const user = this.users.find(user => {
      return (user.name === this.formUser.value.name && user.password === this.formUser.value.password);
    });
    if (user) {
      if (user.role === "GimTeacher") {
        this.router.navigate(['lesson-list']);
      } else {
        this.router.navigate(['registration']);
      }
    } else {
      alert("שם משתמש או סיסמא שגויים");
    }
  }
}



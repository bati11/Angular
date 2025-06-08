import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersListServiceService {
  constructor() { }
  private users: User[] = [{name: 'ב', password: 'ב',role:"GimTeacher"}, {name: 'Tzipi', password: '1234',role:"secretery"}, {name: 'keila', password: '4321',role:"GimTeacher"}];
  getUsers(): User[] {
    return this.users;
  } 
}

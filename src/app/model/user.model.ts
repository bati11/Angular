
type Role = 'GimTeacher' | 'secretery';
export interface User {
    name: string;
    password: string;
    role: Role;
}
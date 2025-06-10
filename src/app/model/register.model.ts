import { Lesson } from "./lesson.model";

export interface Register {
    firstName: string;
    lastName: string;
    phone: string;
    id: string;
    lessonName: string;
    price: number;
    isPayed: boolean;
    moreDetails?: string;
}
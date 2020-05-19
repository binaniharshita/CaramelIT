import { Chapter } from './chapter';

export class Course{
    course_id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    chapter: Chapter[];
}

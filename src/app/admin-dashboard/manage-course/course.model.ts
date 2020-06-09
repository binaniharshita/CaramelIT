export interface Course {
  id: string;
  title: string;
  description: string;
  subCatId: string;
  imagePath: string;
  contentModule: Module;
}

export class Module{
  lesson: Lesson[];
  scenario: [];
  project: [];
  test: [];
}
export class Lesson{
  sno: string;
  lessonsTime: number;
  lessonsName: string;
  pptLink: string;
}

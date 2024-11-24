import { Semester } from "./semster";
import { Teacher } from "./teacher";

export type Course = {
  courseid: number;
  code: string;
  name: string;
};

export type CourseDetail = {
  list: ({
    rollid: number;
  } & Teacher &
    Semester)[];
} & Course;

export type Roll = Course & Teacher & Semester & { rollid: number };

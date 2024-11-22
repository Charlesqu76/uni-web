import { Semester } from "./semster";
import { Teacher } from "./teacher";

export type Course = {
  courseId: number;
  code: string;
  name: string;
};

export type CourseDetail = Course & Teacher & Semester;

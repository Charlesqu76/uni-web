import { Course, CourseDetail, Roll } from "@/types/course";
import { myFetch } from "@/util/fetch";

export const getCourses = () => {
  return myFetch.get<Course[]>("course");
};

export const getCourseDetail = (payload: string) => {
  return myFetch.get<CourseDetail>("course/" + payload);
};

export const getroll = (payload: string) => {
  return myFetch.get<Roll>("course/roll/" + payload);
};
